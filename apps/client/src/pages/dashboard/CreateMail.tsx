import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import { defaultSections } from "@reactive-resume/schema";
import { RichInput } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";

import { AiActions } from "@/client/components/ai-actions";
import { useResumeStore } from "@/client/stores/resume";
import { Contract, ContractSendTransactionOptions } from 'web3/eth/contract'; // Import types

import Mail from '../../services/mail/sendMail';
import { Input } from '@reactive-resume/ui';

function CreateMail() {
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [listening, setListening] = useState(false);
  const recognition: any = new (window as any).webkitSpeechRecognition();
  const setValue = useResumeStore((state) => state.setValue);
  const section = useResumeStore(
    (state) => state?.resume?.data?.sections?.summary ?? defaultSections?.summary,
  );

  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = () => {
    console.log('Voice recognition started');
    setListening(true);
  };

  recognition.onend = () => {
    console.log('Voice recognition stopped');
    setListening(false);
  };

  recognition.onresult = (event: any) => {
    let interimTranscript = '';
    let finalTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript += transcript;
      }
    }

    console.log(finalTranscript, 'ft')
    setMessage(finalTranscript);
  };

  const toggleListening = (e: any) => {
    if (listening) {
      recognition.stop();
    } else {
      recognition.start();
    }
    setListening(prevState => !prevState);
    e.preventDefault()
  };

  async function handlePL(): Promise<void> {
    try {
      if (typeof window !== 'undefined' && 'ethereum' in window) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const userAddress = web3.currentProvider?.selectedAddress; // Check provider documentation
  
        if (!userAddress) {
          throw new Error('User address not available');
        }
  
        const contractAddress = '0x979404cAe84FdfB53C2EF9f6F1FC393B4126CBfE';
  
        // Define the contract ABI interface (assuming types for event arguments)
        interface EmailSentEvent {
          id: number;
          sentMail: string;
          receivedMail: string;
          subject: string;
          mailDataIPFSHash: string;
          time: string;
        }
  
        const contractABI = [
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": true,
                "internalType": "string",
                "name": "sentMail",
                "type": "string"
              },
              {
                "indexed": true,
                "internalType": "string",
                "name": "receivedMail",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "subject",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "mailDataIPFSHash",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "time",
                "type": "string"
              }
            ],
            "name": "EmailSent",
            "type": "event"
          }
        ];
  
        const contract = new web3.eth.Contract(contractABI, contractAddress);
  
        // Ensure `mail`, `subject`, `message`, and `mailDataIPFSHash` are defined with proper types
        const mail: string = 'recipient@example.com'; // Replace with actual recipient email
        const subject: string = 'Your Mail Subject';
        const message: string = 'Your Mail Message';
        const recipientMail: string = mail; // Assuming recipient is same as `mail`
        const mailDataIPFSHash: string = 'QmHash123'; // Replace with actual IPFS hash
  
        const encodedData = contract.methods.EmailSent(mail, subject, message, recipientMail, mailDataIPFSHash).encodeABI();
  
        const tx: ContractSendTransactionOptions = {
          to: contractAddress,
          from: userAddress,
          data: encodedData,
        };
  
        const receipt = await web3.eth.sendTransaction(tx);
        console.log('Transaction receipt:', receipt);
      } else {
        console.error('MetaMask is not installed or not enabled, or code is not running in a browser environment.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const sendMail = (event: any) => {
    handlePL();
    const val = localStorage.getItem('mail');
    axios.post("https://backend-mmt.onrender.com/sendEmail", {
      email: mail, subject: subject, text: message
    }).then((res) => console.log(res)).catch((err) => console.log(err))
    event.preventDefault();
    Mail.send({
      sentMail: val, subject: subject, mailData: message, receivedMail: mail
    });
  }

  return (
    <>
      <div className="login-container">
        <form className="login-form" style={{marginTop:'50px'}}>
      
      
          <div >
          <h2 style={{fontSize:'14px',fontWeight:'bolder'}}>Mail Id</h2>
              <Input
              type='text'
                id="fullWidth"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
       
          </div>
          <div style={{ marginTop: '15px' }}>
           
          <h2  style={{fontSize:'14px',fontWeight:'bolder'}}>Subject</h2>
              <Input type='text'
              
             
                id="fullWidth"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
       

          </div>
          <div style={{ marginTop: '15px' }}>
           
           <h2  style={{fontSize:'14px',fontWeight:'bolder'}}>Message</h2>
               <Input type='text'
                 id="fullWidth"
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}
               />
        
 
           </div>
          <div style={{ marginTop: '20px' }}>
         <h2  style={{fontSize:'14px',fontWeight:'bolder'}}>Text EnhanceMent</h2>
              {/* <Input
              type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type the mail content here…"
              /> */}

<section id="summary" className="grid gap-y-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
    
          {/* <h2 className="line-clamp-1 text-3xl font-bold" style={{color:"#09b48b"}}>{section?.name}</h2> */}
        </div>

        <div className="flex items-center gap-x-2">
       
        </div>
      </header>

      <main className={cn(!section?.visible && "opacity-50")}>
        <RichInput
          content={message}
          onChange={(value) => {
         
        }}
        aria-valuetext={message}
          footer={(editor) => (
            <AiActions value={editor.getText()} onChange={editor?.commands?.setContent} />
          )}
        />
      </main>
    </section>
          </div>
          <div style={{display:'flex'}}><button type="submit" style={{ marginTop: '20px',backgroundColor:'#007BFF',color:'white',padding:"10px 20vw",borderRadius:'20px',marginLeft:'200px' }} onClick={sendMail}>Send</button>
          <div onClick={toggleListening} style={{marginTop:'20px',marginLeft:'10px',paddingTop:'10px',paddingLeft:'10px',paddingRight:'10px',backgroundColor:'#007BFF',borderRadius:'50%'}}>
            {<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 100 100" id="microphone"><g><path d="M52 75.9V86h14c1.1 0 2 .9 2 2s-.9 2-2 2H34c-1.1 0-2-.9-2-2s.9-2 2-2h14V75.9c-13.4-1-24-12.3-24-25.9 0-1.1.9-2 2-2s2 .9 2 2c0 12.1 9.9 22 22 22s22-9.9 22-22c0-1.1.9-2 2-2s2 .9 2 2c0 13.7-10.6 24.9-24 25.9zM65 25v25c0 8.3-6.7 15-15 15s-15-6.7-15-15V25c0-8.3 6.7-15 15-15s15 6.7 15 15zm-4 0c0-6.1-4.9-11-11-11s-11 4.9-11 11v25c0 6.1 4.9 11 11 11s11-4.9 11-11V25z"></path></g><g><path fill="white" d="M1084-650v1684H-700V-650h1784m8-8H-708v1700h1800V-658z"></path></g></svg>
}
          </div>

          </div>
        </form>
      </div>

    </>
  )
}

export default CreateMail;





