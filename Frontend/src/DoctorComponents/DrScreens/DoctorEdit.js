import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom"
import { getDoctorDetails, updateDoctorProfile } from "../../actions/doctorActions"
import { useEffect, useState } from "react";
import classes from './DoctorEdit.module.css'
import DrSideBar from '../DrSideBar/DrSideBar';
import { useFormik } from "formik";
import * as yup from "yup";
import Input from '../../components/NavigationBar/Navbar/Input';


const DoctorEdit = () => {

  const history = useNavigate()
  const location = useLocation()
  const [showMessage, setShowMessage] = useState(false);
  const [email, setEmail] = useState('')
  const [Dname, setDname] = useState('')
  const [mobilenumber, setmobileNumber] = useState('')
  const [gender, setGender] = useState("");

  const disaptch = useDispatch()

  const doctorDetails = useSelector((state) => state.doctorDetails)
  const { loading, error, doctor } = doctorDetails

  const doctorLogin = useSelector((state) => state.doctorLogin)
  const { doctorInfo } = doctorLogin

  const doctorUpdateProfile = useSelector((state) => state.doctorUpdateProfile)
  const { success } = doctorUpdateProfile

  const regex_name = /^[a-zA-Z ]*$/;
  const formik = useFormik({
    initialValues: {
      Dname: doctorInfo.Dname,
      email: doctorInfo.email,
      mobilenumber: doctorInfo.mobilenumber,
      gender: doctorInfo.gender
    },
    validationSchema: yup.object({
      Dname: yup
        .string()
        .required(" Name can't be blank")
        .matches(regex_name, "First name should only contain alphabets")
        .min(2, "Name should be at least 2 characters long")
        .max(25, "Name should not be longer than 13 characters"),
      email: yup
        .string()
        .email("Invalid Email")
        .required("Email can't be blank"),
      mobilenumber: yup.string().required("Mobile Number can't be blank"),
    }),
    onSubmit: (values) => {
      disaptch(
        updateDoctorProfile({
          Dname: values.Dname,
          email: values.email,
          mobilenumber: values.mobilenumber,
          gender: values.gender
        })
      )
        .then(() => {
          setShowMessage(true);
        })
        .catch(() => {
          setShowMessage(false);
        });
    },
  });
  useEffect(() => {
    if (!doctorInfo) {
      history('/')
    // } else {
    //   if (!doctorInfo.Dname) {
    //     disaptch(getDoctorDetails('/Doctor'))
      // } else {
        formik.setValues({
          Dname: doctorInfo.Dname,
          email: doctorInfo.email,
          mobilenumber: doctorInfo.mobilenumber,
          gender: doctorInfo.gender
        });
      }
    }
  , [/*disaptch,*/ history, doctorInfo, doctor])


  // const sumbitHandler = (e) => {
  //   e.preventDefault()
  //   disaptch(updateDoctorProfile({ Dname, email, mobilenumber }))
  // }
  return (
    <div> 
      <DrSideBar/>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Manage Profile</h2>
        </div>
        <div className={classes.form}>
          <form onSubmit={formik.handleSubmit}>
            <div className={classes[`double-row`]}>
              <Input
                label="Full Name"
                input={{
                  id: "Dname",
                  type: "text",
                }}
                value={formik.values.Dname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.Dname ? (
              <div className={classes.error}>{formik.errors.Dname}</div>
            ) : null}
            <div className={classes[`double-row`]}>
              <Input
                label="Email"
                input={{
                  id: "email",
                  type: "email",
                }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.email ? (
              <div className={classes.error}>{formik.errors.email}</div>
            ) : null}
            <div className={classes[`double-row`]}>
              <Input
                label="Mobile Number"
                input={{
                  id: "mobilenumber",
                  type: "number",
                }}
                value={formik.values.mobilenumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.mobilenumber ? (
              <div className={classes.error}>{formik.errors.mobilenumber}</div>
            ) : null}
            <div className={classes[`select-div`]}>
              <label className={classes.label}>Gender</label>
              <select
                id="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button className={classes.button} type="submit">
              Save
            </button>
            {showMessage && success && (
              <div className={classes[`success-message`]}>
                Your Changes have been saved successfully
              </div>
            )}
          </form>
        </div>
      </div>
    </div>

  )
}

export default DoctorEdit
