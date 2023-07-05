import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from 'react';
import socket from './socket'
import { Button } from 'react-bootstrap';

const ChatWindow = () => {

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const doctorLogin = useSelector((state) => state.doctorLogin);
    const { doctorInfo } = doctorLogin;
    
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
  const [inputValue, setInputValue] = useState('');

   const  handleSelection = () => { 
    if (userInfo) {
        const username = userInfo.firstName;
        const email = userInfo.email;
        console.log(username,email)

        socket.auth =  {username,email}
        console.log(socket.auth)
        socket.connect() 
        console.log(socket.connect)
    }
    else if (doctorInfo) {
      const username = doctorInfo.Dname;
      const email = doctorInfo.email;
      console.log(username,email)

      socket.auth =  {username,email}
      console.log(socket.auth)
      socket.connect() 
      console.log(socket.connect)
    } 
    }

    socket.on("connect_error", (err) => {
        console.log(err)
      });


      useEffect(() => {
       
    
        socket.on('users', (receivedUsers) => {
          setUsers(receivedUsers);
          console.log(receivedUsers , "reciec");
        });
    
        socket.on('user connected', (user) => {
          const updatedUsers = [...users, user];
          setUsers(updatedUsers);
          console.log(updatedUsers , "updated")
        });
    
        return () => {
          socket.disconnect();
        };
      }, [users]);

      const handleSendMessage = (content) => {
        if (selectedUser) {
          socket.emit('private message', {
            content,
            to: selectedUser.email,
          });
          const updatedMessages = [
            ...selectedUser.messages,
            { content, fromSelf: true },
          ];
          setSelectedUser({ ...selectedUser, messages: updatedMessages });
          setInputValue('');
        }
      };
      socket.on('private message', ({ content, from, to }) => {
        setUsers((prevUsers) =>
          prevUsers.map((user) => {
            const fromSelf = socket.id === from;
            if (user.email === (fromSelf ? to : from)) {
              const updatedMessages = [
                ...user.messages,
                { content, fromSelf },
              ];
              return {
                ...user,
                messages: updatedMessages,
                hasNewMessages: user !== selectedUser ? true : false,
              };
            }
            return user;
          })
        );
      });
      

  

 

  


  return (
<div>
      <Button onClick={handleSelection}>Connect </Button>
          <h2>Users</h2>
          <ul>
          {users.map((user) => (
          <li key={user.email}>{user.username}</li>
        ))}
      </ul>
      {selectedUser && (
        <div>
          <h2>Chat with {selectedUser.username}</h2>
          {/* Messages */}
          <ul>
            {selectedUser.messages.map((message, index) => (
              <li key={index} className={message.fromSelf ? 'self' : 'other'}>
                {message.content}
              </li>
            ))}
          </ul>
          {/* Input field and send button */}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={() => handleSendMessage(inputValue)}>Send</button> 
          </div>
      )}
    </div>
  )
}

export default ChatWindow ;
