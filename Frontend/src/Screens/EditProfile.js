import React from 'react'
import SideBar from "../components/SideBar/SideBar"
import { Row, Col, Button, Form } from 'react-bootstrap'
import { updateUserProfile, getUserDetails } from '../actions/userActions'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import styles from './EditProfile.module.css'
function EditProfile() {


  const history = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [mobilenumber, setmobileNumber] = useState('')

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const disaptch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const { success } = userUpdateProfile



  useEffect(() => {
    if (!userInfo) {
      history('/login')
    } else {
      if (!userInfo.firstName) {
        disaptch(getUserDetails('/profile_info'))
      } else {
        setFirstName(userInfo.firstName)
        setLastName(userInfo.lastName)
        setEmail(userInfo.email)
        setmobileNumber(userInfo.mobilenumber)
      }
    }
  }, [disaptch, history, userInfo, user])


  const sumbitHandler = (e) => {
    e.preventDefault()
    disaptch(updateUserProfile({ firstName, lastName, email, mobilenumber }))
  }

  return (
    <div>

      <Form onSubmit={sumbitHandler}>
<Form.Group controlId='firstame'>
<Form.Label>Name</Form.Label>
<Form.Control
  type='firstName'
  placeholder='Enter First Name'
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
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

<Form.Group controlId='lastName'>
<Form.Label>Last Name</Form.Label>
<Form.Control
  type='lastName'
  placeholder='Enter Last Name'
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
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
)
}

export default EditProfile      