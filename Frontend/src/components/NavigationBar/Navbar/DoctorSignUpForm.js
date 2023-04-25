import React from "react";
import Input from "./Input";
import Modal from "./Modal";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorPopUp from "./ErrorPopUp";
import classes from "./DoctorSignUpForm.module.css";

const DoctorSignUpForm = (props) => {
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
        speciality: yup.string().required("Choosing a speciality is required"),
    }), //// VALIDATION SCHEMA END

    onSubmit: async (values, { resetForm }) => {
      console.log("Your Sumbitted data is", values);
    },
  });
  console.log("Data values", formik.values);

  return (
    <Modal onClose={props.onClose}>
      <form className={classes[`signup-form`]} onSubmit={formik.handleSubmit}>
        <div className={classes.text}>
          <p>Please Fill in your Personal Information</p>
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
          <button className={classes.button} type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default DoctorSignUpForm;
