import axios from "axios";
import { json } from "react-router-dom";
class getRecievedMail{

    async send(data:any) {
        const val=await axios.get(`http://localhost:5000/recieved/${data}`);
        console.log(val.data);
        return val.data;
    }
}
const receiveMail=new getRecievedMail();
export default receiveMail;