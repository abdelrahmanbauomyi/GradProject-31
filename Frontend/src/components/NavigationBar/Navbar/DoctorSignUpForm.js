import React ,{useState} from "react";
import Input from "./Input";
import Modal from "./Modal";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorPopUp from "./ErrorPopUp";
import classes from "./DoctorSignUpForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate  ,  useLocation} from "react-router-dom"
import { useEffect } from "react";
import {doctorRegister} from "../../../actions/doctorActions"
import PhoneInput, {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";

const DoctorSignUpForm = (props) => {

  const history = useNavigate();
  const location = useLocation();
  const disaptch = useDispatch()
  const DoctorRegister = useSelector(state => state.DoctorRegister)
  const {loading, error,doctorInfo} = DoctorRegister
  const redirect = location.search? location.search.split('=')[1] :'/'
  const [showMessage, setShowMessage] = useState(false);
  
  useEffect(()=>{
    if(doctorInfo){
        history(redirect)
    }
    },[history,doctorInfo,redirect]) 

  const handleRegister = (values) => {
  disaptch(doctorRegister (values))
  }


  const speciality = [
    { name: "Dermatology (Skin)", value: "Dermatology" },
    { name: "Dentistry (Teeth)", value: "Dentistry" },
    {
      name: "Psychiatry (Mental, Emotional or Behavioral Disorders)",
      value: "Psychiatry",
    },
    { name: "Pediatrics and New Born (Child)", value: "Pediatrics" },
    { name: "Neurology (Brain & Nerves)", value: "Neurology" },
    { name: "Orthopedics (Bones)", value: "Orthopedics" },
    { name: "Gynaecology and Infertility", value: "Gynaecology" },
    { name: "Ear, Nose and Throat", value: "ENT" },
    { name: "Cardiology and Vascular Disease (Heart)", value: "Cardiology" },
    {
      name: "Allergy and Immunology (Sensitivity and Immunity)",
      value: "Allergy",
    },
    { name: "Andrology and Male Infertility", value: "andrology" },
    { name: "Audiology", value: "Audiology" },
    {
      name: "Cardiology and Thoracic Surgery (Heart & Chest)",
      value: "Cardiothoracic",
    },
    { name: "Chest and Respiratory", value: "Respiratory" },
    { name: "Diabetes and Endocrinology", value: "Endocrinology" },
    { name: "Diagnostic Radiology (Scan Centers)", value: "Radiology" },
    { name: "Dietitian and Nutrition", value: "Nutrition" },
    { name: "Family Medicine", value: "Family-Medicine" },
  ];
  const handleDateChange = (event) => {
    formik.setFieldValue("age", event.target.value);
  };
  const regex_name = /^[a-zA-Z ]*$/;
  const regex_password =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@$!%*?&])[A-Za-z\d-_$@$!%*?&]{8,}$/;
  const regex_number = /^\d{11}$/;

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
      speciality: "",
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
      phoneNumber: yup
        .string()
        .required("Phone Number is required")
        // .matches(regex_number, "Phone Number must be 11 digits")
        ,
        speciality: yup.string().required("Choosing a speciality is required"),
    }), //// VALIDATION SCHEMA END

    onSubmit: async (values, { resetForm }) => {
      console.log("Your Sumbitted data is", values);
        handleRegister(values);
        console.log("data added");
        setShowMessage(true);
        setFormSubmitted(true);
        resetForm();
        setTimeout(() => {
          props.onClose(); 
        }, 1500);
    },
  });
  console.log("Data values", formik.values);

  return (
    <Modal onClose={props.onClose}>
      <form className={classes[`signup-form`]} onSubmit={formik.handleSubmit}>
        <div className={classes.text}>
          <h2>Please Fill in your Personal Information</h2>
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
            <ErrorPopUp top={220} right={455}>
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
              disabled={formSubmitted}
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
          <div className={classes.selectdiv}>
            <label htmlFor="speciality">Speciality</label>
            <select
              name="speciality"
              id="speciality"
              value={formik.values.speciality}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled defaultValue hidden>
                Select your speciality
              </option>
              {speciality.map((specialty) => (
                <option key={specialty.value} value={specialty.value}>
                  {specialty.name}
                </option>
              ))}
            </select>
            {formik.touched.speciality && formik.errors.speciality ? (
          <ErrorPopUp top={475} left={475}>
            {formik.errors.speciality}
          </ErrorPopUp>
        ) : null}
          </div>
          {/* <button className={classes.button} type="submit">
            Sign Up
          </button> */}
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
        </div>
      </form>
    </Modal>
  );
};

export default DoctorSignUpForm;
