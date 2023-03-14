import React from "react";
import Modal from "./Modal";
import Input from "./Input";
import classes from "./SignInForm.module.css"

const SignInForm = (props) => {
  return (
    <Modal onClose={props.onClose}>
        <form className={classes[`signin-form`] }>
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
      />
      <Input
            label="Password"
            input={{
              id: "password",
              type: "password",
              placeholder: "Your Password",
            }}
          />
          </div>
          <div className={classes[`sign-up-text`]}>
            <p>Don't have an account?</p>
            <p onClick={()=>props.onSwitch("signup")}>Sign up now!</p>
          </div>
          </form>
    </Modal>
  );
};

export default SignInForm;
