import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from "./constant"
import axios from 'axios';
import headersConfig from "../utils/headersConfig"
import { useState,useEffect } from 'react';
import { useSelector } from "react-redux";
export default function App() {


  const [appointments, setAppointments] = useState([]);
  const config = headersConfig("booking/userhistory");

  useEffect(() => {
    axios.get('http://localhost:8000/booking/userhistory', config)
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



const userLogin = useSelector(state=>state.userLogin)
const {userInfo} = userLogin
const doctorLogin = useSelector(state=>state.doctorLogin)
const {doctorInfo} = doctorLogin

  

    function randomID(len) {
        let result = '';
        if (result) return result;
        var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
          maxPos = chars.length,
          i;
        len = len || 5;
        for (i = 0; i < len; i++) {
          result += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return result;
      }
      
       function getUrlParams(
        url = window.location.href
      ) {
        let urlStr = url.split('?')[1];
        return new URLSearchParams(urlStr);
      }


        
      const roomID = appointments.roomID
     //  const name = appointments.Doctor.Dname
   const name = doctorInfo? appointments.Doctor.Dname: appointments.User.First ;
   
  let myMeeting = async (element) => {
 // generate Kit Token
  const appID = APP_ID;
  const serverSecret = SERVER_SECRET;
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest
  (appID, serverSecret, roomID, randomID(5),  randomID(5));


 // Create instance object from Kit Token.
  const zp = ZegoUIKitPrebuilt.create(kitToken);
  // start the call
  zp.joinRoom({
    container: element,
    sharedLinks: [
      {
        name: 'Personal link',
        url:
         window.location.protocol + '//' + 
         window.location.host + window.location.pathname +
          '?roomID=' +
          roomID,
      },
    ],
    scenario: {
      mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
    },
  });


};

return (
<div
  ref={myMeeting}
  style={{ width: '100vw', height: '100vh' }}
></div>
);
}