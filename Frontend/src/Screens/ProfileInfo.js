import React, { useState, useEffect } from "react";
import styles from "./ProfileInfo.module.css";
import results from "../results";
import axios from 'axios';
import SideBar from "../components/SideBar/SideBar"
import Footer from "../components/Footer/Footer";



function ProfileInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


const databaseURL = 'https://online-clinic-99063-default-rtdb.firebaseio.com/';

const {data}=  axios.get(`${databaseURL}/users.json`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

  return (
    <div>
    <div className={styles[`main-contaienr`]}>
       
       <SideBar/>
      <h1>Welcome,`</h1>
      <div className={styles[`user-info-box`]}>
        <div className={styles[`user-info-name`]}>
          <label>Name:</label>
          <span id={styles.firstnamefield}>{name}</span>
        </div>
        <div className={styles[`user-info-number`]}>
          <label>Phone Number:</label>
          <span>{email}</span>
        </div>
      </div>
    </div>
    <Footer/>
    </div>

  );
}

export default ProfileInfo;
