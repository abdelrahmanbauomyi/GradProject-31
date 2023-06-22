import Modal from "./Modal";
import classes from "./SignUpForm.module.css";
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
import PhoneInput, {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import { register } from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const SignUpForm = (props) => {
  const history = useNavigate();
  const location = useLocation();

  const disaptch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const [showMessage, setShowMessage] = useState(false);
  
  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleRegister = (values) => {
    const formattedPhoneNumber = values.phoneNumber.startsWith("+")
    ? values.phoneNumber.slice(1) // Remove the "+" sign
    : values.phoneNumber;
  
  const updatedValues = { ...values, phoneNumber: formattedPhoneNumber };
    disaptch(register(updatedValues));
  };
  const handleDateChange = (event) => {
    formik.setFieldValue("age", event.target.value);
  };

  const regex_name = /^[a-zA-Z ]*$/;
  const regex_password =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@$!%*?&])[A-Za-z\d-_$@$!%*?&]{8,}$/;
    const [formSubmitted, setFormSubmitted] = useState(false);
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
        .max(13, "First name should not be longer than 13 characters"),

      lastname: yup
        .string()
        .required("Last name is required")
        .matches(regex_name, "Last name should only contain alphabets")
        .min(2, "Last name should be at least 2 characters long")
        .max(13, "Last name should not be longer than 13 characters"),

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
      phoneNumber: yup.string().required("Phone Number is required"),
      // .matches(regex_number, "Phone Number must be 11 digits"),
    }), //// VALIDATION SCHEMA END

    onSubmit: async (values, { resetForm }) => {
      console.log("Your Sumbitted data is", values);
      try {
        // await addUsers(values);
        handleRegister(values)
        // console.log("data added");
        console.log("Your Sumbitted data is", values);
        setShowMessage(true);
        setFormSubmitted(true);
        resetForm();
        setTimeout(() => {
          props.onClose(); 
        }, 1500);
      
      } catch (error) {
        console.error("error,,,,,,: ", error);
      }
    },
  });

  console.log("Data values", formik.values);
  // console.log("Errors", formik.errors);
  // console.log("Touched", formik.touched);
  // console.log(formik.errors.phoneNumber);
  // console.log(formik.values.phoneNumber);
  return (
    <Modal onClose={props.onClose}>
      <form className={classes[`signup-form`]} onSubmit={formik.handleSubmit}>
        <div className={classes.text}>
          <h2>Sign Up For an Account Now!</h2>
        </div>
        <div className={classes[`form-row`]}>
          <Input
            label="First Name"
            input={{
              id: "firstname",
              type: "text",
              placeholder: "Your First Name",
              disabled:formSubmitted
            }}
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <ErrorPopUp top={140} left={90}>
              {formik.errors.firstname}
            </ErrorPopUp>
          ) : null}
          <Input
            label="Last Name"
            input={{
              id: "lastname",
              type: "text",
              placeholder: "Your Last Name",
              disabled:formSubmitted
            }}
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <ErrorPopUp top={140} right={150}>
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
              disabled:formSubmitted
            }}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorPopUp top={220} right={475}>
              {formik.errors.email}
            </ErrorPopUp>
          ) : null}
          <div className={classes.selectdiv}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <PhoneInput
              id="phoneNumber"
              placeholder="Enter phone number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange("phoneNumber")}
              onBlur={formik.handleBlur("phoneNumber")}
              international={true}
              defaultCountry="EG"
              countryCallingCodeEditable={false}
              disabled={formSubmitted}
            />
          </div>
          {/* <Input
            label="Phone Number"
            input={{
              id: "phoneNumber",
              type: "number",
              placeholder: "Enter your Phone Number",
            }}
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          /> */}
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <ErrorPopUp top={220} left={400}>
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
              disabled:formSubmitted
            }}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorPopUp top={310} right={475}>
              {formik.errors.password}
            </ErrorPopUp>
          ) : null}
          <Input
            label="Confirm Password"
            input={{
              id: "confirmPassword",
              type: "password",
              placeholder: "Confirm Password",
              disabled:formSubmitted
            }}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <ErrorPopUp top={310} left={400}>
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
              disabled:formSubmitted
            }}
            value={formik.values.age}
            onChange={handleDateChange}
            onBlur={() => formik.setFieldTouched("age")}
          />
          {formik.touched.age && formik.errors.age ? (
            <ErrorPopUp top={390} right={475}>
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
              disabled={formSubmitted}
            >
              <option value="" disabled defaultValue hidden>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        {formik.touched.gender && formik.errors.gender ? (
          <ErrorPopUp top={390} left={475}>
            {formik.errors.gender}
          </ErrorPopUp>
        ) : null}
        {/* <div>
          <button className={classes.button} type="submit">
            Sign Up
          </button>
          <div className={classes[`sign-in-text`]}>
            <p>Already have an account?</p>
            <p onClick={() => props.onSwitch("signin")}>Login in now!</p>
          </div>
        </div> */}
         {showMessage ? (
            <p className={classes[`success-message`]}>
              Your Account has been Successfully Created 
            </p>
          ) :  <div>
          <button className={classes.button} type="submit">
            Sign Up
          </button>
          <div className={classes[`sign-in-text`]}>
            <p>Already have an account?</p>
            <p onClick={() => props.onSwitch("signin")}>Login in now!</p>
          </div>
        </div>}
      </form>
    </Modal>
  );
};
export default SignUpForm;
