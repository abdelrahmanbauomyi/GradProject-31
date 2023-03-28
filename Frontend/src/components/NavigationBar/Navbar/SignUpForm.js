import Modal from "./Modal";
import React  from "react";
import classes from"./SignUpForm.module.css";
import Input from "./Input";
import { register } from "../../../actions/userActions";
import { useState } from "react";
import results from "../../../results";

const SignUpForm = (props) => {

  const[firstName,setFirstName]=useState("")
  const[lastName,setLastName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const[gender,setGender]=useState("")


  const handleRegister = (e) => {
    e.preventDefault();
    const Data = {email,password,firstName,lastName,gender,confirmpassword}
    results.post('/users.json',Data).then(response=>{
      console.log(response);
      })

    }
      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };
    
      const onChangeName = (e) => {
        const firstname = e.target.value;
        setFirstName(firstname);
      };
    





    
  
  return (
    <Modal onClose={props.onClose}>
      <form className={classes[`signup-form`] } onSubmit={handleRegister}>
        <div className={classes.text}>
          <p>Sign Up For an Account Now!</p>
        </div>
        <div className={classes[`form-row`]}>
          <Input
            label="First Name"
            input={{
              id: "firstname",
              type: "text",
              placeholder: "Your First Name",
            }}
            value={firstName}
            onChange={onChangeName}
          />
          <Input
            label="Last Name"
            input={{
              id: "lastname",
              type: "text",
              placeholder: "Your Last Name",
            }}
           
          />
        </div>
        <div className={classes[`form-row`]}>
          <Input
            label="Email Address"
            input={{
              id: "email",
              type: "email",
              placeholder: "Enter your Email Address",
            }}
            
          />
        </div>
        <div className={classes[`form-row`]}>
          <Input
            label="Password"
            input={{
              id: "password",
              type: "password",
              placeholder: "Your Password",
            }}
          />
          <Input
            label="Confirm Password"
            input={{
              id: "confirmPassword",
              type: "password",
              placeholder: "Confirm Password",
            }}
          
          />
        </div>
        <div className={classes[`form-row`]}>
          <Input
            label="Date of Birth"
            input={{
              id: "dateOfBirth",
              type: "date",
            }}
          />
          <div className={classes.selectdiv}>
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Rather not specify</option>
            </select>
          </div>
        </div>
        <div>
          <button className={classes.button} type="submit">Sign Up</button>
          <div className={classes[`sign-in-text`]}>
            <p>Already have an account?</p>
            <p onClick={()=>props.onSwitch("signin")}>Login in now!</p>
          </div>
        </div>
      </form>
      </Modal>
  );
};

export default SignUpForm;


// <Modal onClose={props.onClose}