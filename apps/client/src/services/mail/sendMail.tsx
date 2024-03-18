import axios from "axios";
import { json } from "react-router-dom";
class sendMail{

    async send(data:any) {
        const val=await axios.post('http://localhost:5000',data);
        console.log(val);
    }
}
const Mail=new sendMail();
export default Mail;