import Modal from "./Modal";
import classes from"./SignUpForm.module.css";
import Input from "./Input";
// import { register } from "../../../actions/userActions";
// import { useState } from "react";
import axios from "axios";
import results from "../../../results";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorPopUp from "./ErrorPopUp";
// import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
// import calstyles from './ReactCalendar.module.css'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { register } from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate  ,  useLocation} from "react-router-dom"
import { useEffect,useState } from "react";
const SignUpForm = (props) => {
  
  
  const history = useNavigate();
  const location = useLocation();
  

    const disaptch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const {loading, error,userInfo} = userRegister
    const redirect = location.search? location.search.split('=')[1] :'/'
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob,setDob] = useState(yup.date);
    const [gender,setGender] =useState("");
    const [mobilenumber,setmobileNumber] = useState("");


    useEffect(()=>{
      if(userInfo){
          history(redirect)
      }
      },[history,userInfo,redirect]) 
  
  
  
  
  const handleRegister = (values) => {
    disaptch(register(values))
    // e.preventDefault();
    // const Data = {email,password,firstName,lastName,gender,confirmpassword}
   /* const options = {
      url: 'http://localhost:8000/login',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8000/login',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type': 'application/json;charset=UTF-8'
      },
      withCredentials: true,
      data: {
          "password":"a7a",
          "email":"omar.tolan@gmail.com"
      }
    };
    
    axios(options)
      .then(response => {
        console.log(response.status, response.body);
      });
    }*/

    
    

  }
    const handleDateChange = (event) => {
      formik.setFieldValue("age", event.target.value);
    };
  

  // const[firstName,setFirstName]=useState("")
  // const[lastName,setLastName]=useState("")
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmpassword, setConfirmPassword] = useState("");
  // const[gender,setGender]=useState("")
  const regex_name = /^[a-zA-Z ]*$/;
  const regex_password =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@$!%*?&])[A-Za-z\d-_$@$!%*?&]{8,}$/;
  const regex_number = /^\d{11}$/;
  /*
  ^ - The beginning of the string.
 (?=.*[a-z]) -  This ensures that the password contains at least one lowercase letter.
 (?=.*[A-Z]) -  This ensures that the password contains at least one uppercase letter.
 (?=.*\d) -  This ensures that the password contains at least one number.
 (?=.*[-_@$!%*?&]) -  This ensures that the password contains at least one special character.
 [A-Za-z\d@$!%*?&]{8,} - Matches any character that is a letter, digit, or one of the special characters -_@$!%*?&, 
 and is at least 8 characters long. This ensures that the password meets the minimum length requirement.
 $ - The end of the string. 
  */
 const formik = useFormik({
  initialValues: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    phoneNumber: "",
  },
  validationSchema: yup.object({
    firstname: yup
      .string()
      .required("First name is required")
      .matches(regex_name, "First name should only contain alphabets")
      .min(2, "First name should be at least 2 characters long")
      .max(10, "First name should not be longer than 10 characters"),

    lastname: yup
      .string()
      .required("Last name is required")
      .matches(regex_name, "Last name should only contain alphabets")
      .min(2, "Last name should be at least 2 characters long")
      .max(10, "Last name should not be longer than 10 characters"),

    email: yup.string().email("Invalid Email").required("Email is required"),

    password: yup
      .string()
      .required("Password is Required")
      .matches(
        regex_password,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),

    confirmPassword: yup
      .string()
      .required("Confirming Password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    age: yup
      .date()
      .required("Choosing your age is required")
      .test("age", "You must be 18 years old or older", function (age) {
        const cutoff = new Date();
        cutoff.setFullYear(cutoff.getFullYear() - 18);
        return age <= cutoff;
      }),
    gender: yup.string().required("Selecting your gender is Required"),
    phoneNumber: yup
      .string()
      .required("Phone Number is required")
      .matches(regex_number, "Phone Number must be 11 digits"),
  }), //// VALIDATION SCHEMA END

  onSubmit: async (values, { resetForm }) => {
    console.log("Your Sumbitted data is", values);
    try {

      // await addUsers(values);
      handleRegister(values)
      console.log("data added");
      resetForm();
    } catch (error) {
      console.error("error,,,,,,: ", error);
    }
  },
});


 
      // const onChangePassword = (e) => {
      //   const password = e.target.value;
      //   setPassword(password);
      // };
    
      // const onChangeName = (e) => {
      //   const firstname = e.target.value;
      //   setFirstName(firstname);
      // };
    

    
  // return (
    // <Modal onClose={props.onClose}>
    //   <form className={classes[`signup-form`] } onSubmit={handleRegister}>


  
  // async function addUsers(user) {
  //   await fetch(
  //     "https://users-test-signup-default-rtdb.europe-west1.firebasedatabase.app//users.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(user),
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );
  // }

  
  // console.log("Data values", formik.values);
  // console.log("Errors", formik.errors);
  // console.log("Touched", formik.touched);
  // console.log(formik.errors.phoneNumber);
  // console.log(formik.values.phoneNumber);
  return (
    <Modal onClose={props.onClose}>
      <form className={classes[`signup-form`]} onSubmit={formik.handleSubmit}>
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
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <ErrorPopUp top={160} left={90}>
              {formik.errors.firstname}
            </ErrorPopUp>
          ) : null}
          <Input
            label="Last Name"
            input={{
              id: "lastname",
              type: "text",
              placeholder: "Your Last Name",
            }}
           
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <ErrorPopUp top={160} right={150}>
              {formik.errors.lastname}
            </ErrorPopUp>
          ) : null}
        </div>
        <div className={classes[`form-row`]}>
          <Input
            label="Email Address"
            input={{
              id: "email",
              type: "email",
              placeholder: "Enter your Email Address",
            }}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorPopUp top={240} right={475}>
              {formik.errors.email}
            </ErrorPopUp>
          ) : null}
          <Input
            label="Phone Number"
            input={{
              id: "phoneNumber",
              type: "number",
              placeholder: "Enter your Phone Number",
            }}
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <ErrorPopUp top={240} left={400}>
              {formik.errors.phoneNumber}
            </ErrorPopUp>
          ) : null}
        </div>
        <div className={classes[`form-row`]}>
          <Input
            label="Password"
            input={{
              id: "password",
              type: "password",
              placeholder: "Your Password",
            }}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorPopUp top={330} right={475}>
              {formik.errors.password}
            </ErrorPopUp>
          ) : null}
          <Input
            label="Confirm Password"
            input={{
              id: "confirmPassword",
              type: "password",
              placeholder: "Confirm Password",
            }}
          
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
         {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <ErrorPopUp top={320} left={400}>
              {formik.errors.confirmPassword}
            </ErrorPopUp>
          ) : null}
        </div>
        <div className={classes[`form-row`]}>
          <Input
            label="Date of Birth"
            input={{
              id: "dateOfBirth",
              type: "date",
            }}
            value={formik.values.age}
            onChange={handleDateChange}
            onBlur={() => formik.setFieldTouched("age")}
          />
            {formik.touched.age && formik.errors.age ? (
            <ErrorPopUp top={410} right={475}>
              {formik.errors.age}
            </ErrorPopUp>
          ) : null}
          <div className={classes.selectdiv}>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled defaultValue hidden>
                Select your gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        {formik.touched.gender && formik.errors.gender ? (
            <ErrorPopUp top={410} left={475}>
              {formik.errors.gender}
            </ErrorPopUp>
          ) : null}
        <div>
          <button className={classes.button} type="submit">
            Sign Up
          </button>
          <div className={classes[`sign-in-text`]}>
            <p>Already have an account?</p>
            <p onClick={() => props.onSwitch("signin")}>Login in now!</p>
          </div>
        </div>
      </form>
    </Modal>
  );
};
export default SignUpForm;
