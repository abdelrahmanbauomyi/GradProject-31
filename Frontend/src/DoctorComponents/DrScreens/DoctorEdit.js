import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom"
import { getDoctorDetails, updateDoctorProfile } from "../../actions/doctorActions"
import { useEffect, useState } from "react";
import styles from './DoctorEdit.module.css'
import DrSideBar from '../DrSideBar/DrSideBar';


const DoctorEdit = () => {

  const history = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [Dname, setDname] = useState('')
  const [mobilenumber, setmobileNumber] = useState('')

  const disaptch = useDispatch()

  const doctorDetails = useSelector((state) => state.doctorDetails)
  const { loading, error, doctor } = doctorDetails

  const doctorLogin = useSelector((state) => state.doctorLogin)
  const { doctorInfo } = doctorLogin

  const doctorUpdateProfile = useSelector((state) => state.doctorUpdateProfile)
  const { success } = doctorUpdateProfile

  useEffect(() => {
    if (!doctorInfo) {
      history('/HomePage')
    } else {
      if (!doctorInfo.Dname) {
        disaptch(getDoctorDetails('/Doctor'))
      } else {
        setDname(doctorInfo.Dname)
        setEmail(doctorInfo.email)
        setmobileNumber(doctorInfo.mobilenumber)
      }
    }
  }, [disaptch, history, doctorInfo, doctor])


  const sumbitHandler = (e) => {
    e.preventDefault()
    disaptch(updateDoctorProfile({ Dname, email, mobilenumber }))
  }
  return (
    <div> 
      <DrSideBar/>
    <div className={styles.container}>
    <div className={styles.title}>
      <h2>Manage Profile</h2>
    </div>
    <div className={styles.form}>
      <form>
        <div className={styles[`double-row`]}>
          <label className={styles.label}>First Name</label>
          <input type="text"></input>
          <label className={styles.label}>Last Name</label>
          <input type="text"></input>
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Email</label>
          <input type="email"></input>
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Mobile Number</label>
          <input type="number"></input>
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Gender</label>
          <select name="cars" id="cars">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Date of Birth</label>
          <input type="date"></input>
        </div>
        <button className={styles.button} type="submit">
          Save{" "}
        </button>
        <div className={styles[`success-message`]}>
          Your Changes has been saved successfully
        </div>
        <div className={styles[`failed-message`]}>
          An Error was encountred, Please Try Again!
        </div>
      </form>
    </div>
  </div>
  </div>

  )
}

export default DoctorEdit
