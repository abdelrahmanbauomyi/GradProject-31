import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom"
import { getDoctorDetails, updateDoctorProfile } from "../../actions/doctorActions"
import { useEffect, useState } from "react";


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
      <div>
        <Form onSubmit={sumbitHandler}>
          <Form.Group controlId='Dname'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='Dname'
              placeholder='Enter Full Name'
              value={Dname}
              onChange={(e) => setDname(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='mobilenumber'>
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type='number'
              placeholder='Mobile Number'
              value={mobilenumber}
              onChange={(e) => setmobileNumber(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='sumbit' variant='primary'>Update</Button>
        </Form>


      </div>
    </div>
  )
}

export default DoctorEdit
