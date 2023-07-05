import React from 'react'
import Modal from './Modal';
import Input from './Input';
import classes from "./DoctorSignInForm.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { drLogin } from '../../../actions/doctorActions';





function DoctorSignInForm(props) {

  const history = useNavigate();
  const location = useLocation();
  const disaptch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doctorLogin = useSelector((state) => state.doctorLogin);
  const { loading, error, doctorInfo } = doctorLogin;
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (doctorInfo) {
      history(redirect);
    }
  }, [history, doctorInfo, redirect]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    disaptch(drLogin(email, password))
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };




    return (
        <Modal onClose={props.onClose}>
          <form className={classes[`signin-form`]} onSubmit={sumbitHandler}>
            <div className={classes.text}>
              <h4>Sign Into your Doctor Account Now!</h4>
            </div>
            <div>
              <Input
                label="Email Address"
                input={{
                  id: "email",
                  type: "email",
                  placeholder: "Enter your Email Address",
                }}
                 value={email}
                 onChange={onChangeEmail}
              />
              <Input
                label="Password"
                input={{
                  id: "password",
                  type: "password",
                  placeholder: "Your Password",
                }}
                value={password}
                 onChange={onChangePassword}
              />
            </div>
            <div className={classes[`sign-up-text`]}>
              <p>Don't have an account?</p>
              <p onClick={() => props.onSwitch("signup")}>Sign up now!</p>
            </div>
            <button className={classes.button}>Sign In</button>
          </form>
        </Modal>
      );
    };


export default DoctorSignInForm