import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from 'react';
import socket from './socket'
import { Button } from 'react-bootstrap';

const ChatWindow = () => {

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin

    const [users, setUsers] = useState([]);
   const  handleSelection = () => { 
        const username = userInfo.firstName;
        const email = userInfo.email;
        console.log(username,email)

        socket.auth =  {username,email}
        console.log(socket.auth)
        socket.connect() 
        console.log(socket.connect)
        
    }

    socket.on("connect_error", (err) => {
        console.log(err)
      });

 

      useEffect(() => {
        // Handling 'user connected' event
        socket.on('user connected', (user) => {
          const updatedUsers = [...users, user];
          setUsers(updatedUsers);
        });
    
        // Clean up when component unmounts
        return () => {
          socket.disconnect();
        };
      }, [users]);
  


  return (
<div>
  <Button onClick={handleSelection}>Connect </Button>
    </div>
  )
}

export default ChatWindow
