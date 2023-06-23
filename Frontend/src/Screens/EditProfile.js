import React from "react";
import SideBar from "../components/SideBar/SideBar";
import { Row, Col, Button, Form } from "react-bootstrap";
import { updateUserProfile, getUserDetails } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./EditProfile.module.css";
import DrSideBar from "../DoctorComponents/DrSideBar/DrSideBar";

function EditProfile() {
  const history = useNavigate();
  const location = useLocation();
  const [showMessage, setShowMessage] = useState(false);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [mobilenumber, setmobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const disaptch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history("/login");
    } else {    
        setFirstName(userInfo.firstName);
        setLastName(userInfo.lastName);
        setEmail(userInfo.email);
        setmobileNumber(userInfo.mobilenumber);
        setGender(userInfo.gender);
        const date = new Date(userInfo.dob);
        const month = `0${date.getMonth() + 1}`.slice(-2);
        const day = `0${date.getDate()}`.slice(-2);
        const year = date.getFullYear();
        const formattedDate = `${month}/${day}/${year}`;
        console.log(formattedDate);
        setDob(formattedDate);
        console.log(userInfo.dob);

    }
  }, [history, userInfo ]);



  const sumbitHandler = (e) => {

    e.preventDefault();
    disaptch(
      updateUserProfile({ firstName, lastName, email, mobilenumber, gender })
    )
      .then(() => {
        setShowMessage(true); // Set showMessage to true on successful form submission
      
      })
      .catch(() => {
        setShowMessage(false); // Set showMessage to false on failed form submission
      });
   
  };

  return (
    <div>
         <DrSideBar />
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Manage Profile</h2>
      </div>
      <div className={styles.form}>
        <form onSubmit={sumbitHandler}>
          <div className={styles[`double-row`]}>
            <label className={styles.label}>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            ></input>
            <label className={styles.label}>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div className={styles.row}>
            <label className={styles.label}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className={styles.row}>
            <label className={styles.label}>Mobile Number</label>
            <input
              type="number"
              value={mobilenumber}
              onChange={(e) => setmobileNumber(e.target.value)}
            ></input>
          </div>
          <div className={styles.row}>
            <label className={styles.label}>Gender</label>
            <select
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <button className={styles.button} type="submit">
            Save{" "}
          </button>
          {showMessage && success && (
            <div className={styles[`success-message`]}>
              Your Changes have been saved successfully
            </div>
          )}
          {showMessage && !success && (
            <div className={styles[`failed-message`]}>
              An Error was encountered, Please Try Again!
            </div>
          )}

        </form>
      </div>
      </div>
    
   
    </div>

  );
}

export default EditProfile;
