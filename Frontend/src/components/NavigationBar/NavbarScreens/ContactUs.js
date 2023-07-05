import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import "react-phone-number-input/style.css";
import PhoneInput, {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorPopUp from "../Navbar/ErrorPopUp";
import Header from '../../Header/Header'



const ContactUs = (props) => {
  const regex_name = /^[a-zA-Z ]*$/;
  const [showMessage, setShowMessage] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      phoneNumber: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required("Name is required")
        .matches(regex_name, "Your name should only contain alphabets")
        .min(2, "Your name should be at least 2 characters long"),

      email: yup.string().email("Invalid Email").required("Email is required"),

      subject: yup.string().required("Subject is Required"),

      message: yup.string().required("Message is required"),
      phoneNumber: yup.string().required("Phone Number is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("Your Sumbitted data is", values);
      setShowMessage(true);
      resetForm();
    },
  });
  console.log("Data values", formik.values);
  console.log("Errors", formik.errors);

  return (
    <div>
      <Header/>
    <div className={styles.container}>
      <h1 className={styles.title}>Get in Touch!</h1>
      <div className={styles[`form-container`]}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles[`form-roww`]}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <ErrorPopUp top={110} left={475}>
              {formik.errors.name}
            </ErrorPopUp>
          ) : null}
          <div className={styles[`form-roww`]}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <ErrorPopUp top={210} left={475}>
              {formik.errors.email}
            </ErrorPopUp>
          ) : null}
          <div className={styles[`form-row`]}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <PhoneInput
              id="phoneNumber"
              placeholder="Enter phone number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange("phoneNumber")}
              onBlur={formik.handleBlur("phoneNumber")}
              international
              defaultCountry="EG"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <ErrorPopUp top={310} left={475}>
                {formik.errors.phoneNumber}
              </ErrorPopUp>
            ) : null}
          </div>
          <div className={styles[`form-roww`]}>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="Enter subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.subject && formik.errors.subject ? (
            <ErrorPopUp top={410} left={475}>
              {formik.errors.subject}
            </ErrorPopUp>
          ) : null}
          <div className={styles[`form-roww`]}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              type="text"
              placeholder="Enter message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message ? (
            <ErrorPopUp top={550} left={475}>
              {formik.errors.message}
            </ErrorPopUp>
          ) : null}
          </div>
          <div className={styles[`button-area`]}>
            <button className={styles.button} type="sumbit">
              Send Message
            </button>
            {showMessage ? (
            <p className={styles[`success-message`]}>
              Your Message has been sent successfully!
            </p>
          ) : null}
          </div>
         
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
