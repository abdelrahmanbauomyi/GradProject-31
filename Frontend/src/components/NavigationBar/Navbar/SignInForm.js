import React from "react";
import Modal from "./Modal";
import Input from "./Input";
import classes from "./SignInForm.module.css";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../../actions/userActions";
import { useLocation } from "react-router-dom";

import results from "../../../results";

const SignInForm = (props) => {
  const history = useNavigate();
  const location = useLocation();
  const disaptch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const redirect = location.search ? location.search.split("=")[1] : "/";

  /*
  const postData = (e) =>{
    e.preventDefault()
    const Data = {email,password}
    results.post('/users.json',Data).then(response=>{
    console.log(response);
    })
  }
   
  */

  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [history, userInfo, redirect]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    disaptch(login(email,password))
    //login(email, password, name);
    //disaptch();
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  return (
    <Modal onClose={props.onClose}>
      <form className={classes[`signin-form`]} onSubmit={sumbitHandler}>
        <div className={classes.text}>
          <p>Sign Into your Account Now!</p>
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
          <Input
            label="UserName"
            input={{
              id: "username",
              type: "username",
              placeholder: "Enter your username",
            }}
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div className={classes[`sign-up-text`]}>
          <p>Don't have an account?</p>
          <p onClick={() => props.onSwitch("signup")}>Sign up now!</p>
        </div>
        <button className="ui blue sumbit button">sumbit</button>
      </form>
    </Modal>
  );
};

export default SignInForm;
