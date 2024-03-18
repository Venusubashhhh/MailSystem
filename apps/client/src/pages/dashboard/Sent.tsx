// import React from 'react'
// import sentMail from '@/client/services/mail/getSentMail';
// import receiveMail from '@/client/services/mail/getRecievedMail';
// function Sent() {

//       const [value, setValue] = React.useState(0);
//       const [sentMaildata, setSentMaildata] = React.useState([]);
//       const [inboxMail, setInboxMail] = React.useState([]);
//       const [selectedEmailData, setSelectedEmailData] = React.useState(null); // State for selected email data
//       const [open, setOpen] = React.useState(false);

//       const fetchalldata = async () => {
//             const val = await sentMail.send('venusubash.r@codingmart.com');
//             setSentMaildata(val);
           
//           };
        
//           React.useEffect(() => {
//             fetchalldata();
//           }, []);

//   return (
//     <div>

// <main id="main">
//            <div className="overlay" />
//            <header className="header">
//            <h1>Inbox</h1> 
//            </header>
//            <div id="main-nano-wrapper" className="nano">
//            <div className="nano-content">
//              <ul className="message-list">
//                {sentMaildata.map((val:any, index) => (
//                  <>
//                    <li className="unread" key={index} >
//                      <div className="col col-1">
//                        <p className="title">{val.receivedMail}</p>
//                      </div>
//                      <div className="col col-2">
//                        <div className="subject">
//                          <span className="teaser" style={{marginLeft:'15px'}}>
//                            {val.mailData}
//                          </span>
//                        </div>
//                        <div className="date">11:49 am</div>
//                      </div>
//                    </li>
//                    {/* <Modal
//                      open={open}
//                      onClose={handleClose}
//                      aria-labelledby="modal-modal-title"
//                      aria-describedby="modal-modal-description"
//                    >
//                      <Box sx={style}>
//                        <h3>Sent:</h3>
//                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                          {selectedEmailData && selectedEmailData.sentMail}
//                        </Typography>
//                        <br/>
//                        <hr/>
//                        <br/>
//                        <h3>Received:</h3>
//                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                          {selectedEmailData && selectedEmailData.receivedMail}
//                        </Typography>
//                        <br/>
//                        <hr/>
//                        <br/>
//                        <h3>Subject:</h3>
//                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                          {selectedEmailData && selectedEmailData.subject}
//                        </Typography>
//                        <br/>
//                        <hr/>
//                        <br/>
//                        <div style={{display:'flex'}}>
//                          <h3>Message:  </h3>
//                          <span className="speaker-icon" onClick={() => speak(selectedEmailData && selectedEmailData.mailData)}>
//                            <VolumeDownIcon/>
//                          </span>
//                        </div>
//                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                          {selectedEmailData && selectedEmailData.mailData}
//                        </Typography>
//                      </Box>
//                    </Modal> */}
//                  </>
//                ))}
//              </ul>
//            </div>
//          </div>
//        </main>

//     </div>
//   )
// }

// export default Sent






// import React from 'react'
// import sentMail from '@/client/services/mail/getSentMail';
// import receiveMail from '@/client/services/mail/getRecievedMail';
// import './home.css'
// function Inbox() {

//       const [value, setValue] = React.useState(0);
//       const [sentMaildata, setSentMaildata] = React.useState([]);
//       const [inboxMail, setInboxMail] = React.useState([]);
//       const [selectedEmailData, setSelectedEmailData] = React.useState(null); // State for selected email data
//       const [open, setOpen] = React.useState(false);
//       const [isOpen, setIsOpen] = React.useState(false);

//       const toggleModal = () => {
    
//         setIsOpen(!isOpen);
//       };
    
//       const fetchalldata = async () => {
//             const val = await receiveMail.send('venusubash018@gmail.com');
//             setSentMaildata(val);
           
//           };
        
//           React.useEffect(() => {
//             fetchalldata();
//           }, []);

//   return (
//     <div>

// <main id="main">
//            <div className="overlay" />
//            <header className="header">
//            <h1>Inbox</h1> 
//            </header>
//            <div id="main-nano-wrapper" className="nano">
//            <div className="nano-content">
//              <ul className="message-list">
//                {sentMaildata.map((val:any, index) => (
//                  <>
//                    <li className="unread" key={index} >
//                      <div className="col col-1">
//                        <p className="title">{val.sentMail}</p>
//                      </div>
//                      <div className="col col-2">
//                        <div className="subject">
//                          <span className="teaser" style={{marginLeft:'15px'}}>
//                            {val.mailData}
//                          </span>
//                        </div>
//                        <div className="date">11:49 am</div>
//                      </div>
//                    </li>

// {isOpen && (
//         <div
//           id="openModal-about"
//           className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 transition-opacity duration-100 ease-in-out"
//           onClick={toggleModal}
//         >
//           <div className="mx-auto max-w-md rounded-lg bg-white shadow-md overflow-hidden mt-10">
//             <div className="flex justify-end p-4 border-b border-gray-200">
//               <button
//                 type="button"
//                 onClick={toggleModal}
//                 className="text-gray-400 focus:outline-none hover:text-gray-500"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div className="p-5">
//             <h3>Sent:</h3>
//                        <p id="modal-modal-description" sx={{ mt: 2 }}>
//                          {selectedEmailData && selectedEmailData.sentMail}
//                        </p>
//                        <br/>
//                        <hr/>
//                        <br/>
//                        <h3>Received:</h3>
//                        <p id="modal-modal-description" sx={{ mt: 2 }}>
//                          {selectedEmailData && selectedEmailData.receivedMail}
//                        </p>
//                        <br/>
//                        <hr/>
//                        <br/>
//                        <h3>Subject:</h3>
//                        <p id="modal-modal-description" sx={{ mt: 2 }}>
//                          {selectedEmailData && selectedEmailData.subject}
//                        </p>
//                        <br/>
//                        <hr/>
//                        <br/>
//                        <div style={{display:'flex'}}>
//                          <h3>Message:  </h3>
//                          <span className="speaker-icon" onClick={() => speak(selectedEmailData && selectedEmailData.mailData)}>
//                            <VolumeDownIcon/>
//                          </span>
//                        </div>
//                        <p id="modal-modal-description" sx={{ mt: 2 }}>
//                          {selectedEmailData && selectedEmailData.mailData}
//                        </p>
//             </div>
//           </div>
//         </div>
//       )}

//                  </>
//                ))}
//              </ul>
//            </div>
//          </div>
//        </main>

//     </div>
//   )
// }

// export default Inbox











import React, { useState, useEffect } from 'react';
import sentMail from '@/client/services/mail/getSentMail'; // Assuming correct import path
import receiveMail from '@/client/services/mail/getRecievedMail'; // Assuming correct import path

// Interface for Mail Data with optional receivedMail property
interface MailData {
  sentMail: string;
  receivedMail?: string;
  mailData: string;
  subject: string;
  time:string;
}

function Sent() {
  const [sentMaildata, setSentMaildata] = useState<MailData[]>([]); // Typed state
  const [selectedEmailData, setSelectedEmailData] = useState<MailData | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const fetchAllData = async () => {
    const data = localStorage.getItem('mail');
    const sentData = await sentMail.send(data);
    setSentMaildata(sentData);
  };
// Define a function to speak out the given text
function speak(text:any) {
  // Implementation to speak out the text
  // This implementation depends on the platform you're using.
  // For example, in a web application, you might use the Web Speech API.
  // Below is a simplified example using the SpeechSynthesis API
  if ('speechSynthesis' in window) {
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synthesis.speak(utterance);
  } else {
    console.error('Speech synthesis not supported');
  }
}

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleListItemClick = (mailData: MailData) => {
    setSelectedEmailData(mailData);
    setIsOpen(true); // Open modal on click
  };

  return (
    <div>
      <main id="main">
        <div className="overlay" />
        <header className="header">
          <h1 style={{fontSize:'48px',fontWeight:'bolder'}}>Inbox</h1>
        </header>
        <div id="main-nano-wrapper" className="nano" style={{marginTop:'60px'}}>
          <div className="nano-content">
            <ul className="message-list">
              {sentMaildata.map((val: MailData, index) => (
                <li className="unread" key={index} onClick={() => handleListItemClick(val)} style={{display:'flex',justifyContent:'space-around',backgroundColor:'#EFEFF1',margin:'2px',padding:'15px'}}>
                  <div className="col col-1">
                    <p className="title">{val.receivedMail}</p>
                  </div>
                  <div className="col col-2" style={{display:'flex'}}>
                    <div className="subject">
                      <span className="teaser" style={{ marginLeft: '15px' }}>
                        {val.mailData}
                      </span>
                    </div>
                  
                  </div>
                  <div className="date">{val?.time}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {isOpen && ( // Conditionally render modal
        <div
          id="openModal-about"
          className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 transition-opacity duration-100 ease-in-out"
          onClick={toggleModal} // Close modal on background click
        >
          <div className="mx-auto max-w-md rounded-lg bg-white shadow-md overflow-hidden mt-10">
            <div className="flex justify-end p-4 border-b border-gray-200">
              <button
                type="button"
                onClick={toggleModal}
                className="text-gray-400 focus:outline-none hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-5">
              <h3>Sent:</h3>
              <p>{selectedEmailData && selectedEmailData.sentMail}</p>
              <br />
              <hr />
              <br />
              <h3>Received:</h3>
              <p>{selectedEmailData && selectedEmailData.receivedMail}</p>
              <br />
              <hr />
              <br />
              <h3>Subject:</h3>
              <p>{selectedEmailData && selectedEmailData.subject}</p>
              <br />
              <hr />
              <br />
              <div style={{ display: 'flex' }}>
                <h3>Message: </h3>
                <span className="speaker-icon" onClick={() => {speak(selectedEmailData?.mailData
                  
                  
                  )
                  console.log(selectedEmailData?.mailData)
                  }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-volume-up" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
  <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11"/>
</svg>

</span>


              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sent;
