import {
  DOCTOR_DETAILS_REQUEST, DOCTOR_DETAILS_SUCCESS, DOCTOR_LOGIN_FAILED, DOCTOR_LOGIN_REQUEST, DOCTOR_LOGIN_SUCCESS,
  DOCTOR_LOGOUT_SUCCESS, DOCTOR_LOGOUT_FAILED, DOCTOR_REGISTER_FAILED, DOCTOR_REGISTER_REQUEST, DOCTOR_REGISTER_SUCCESS, DOCTOR_UPDATE_PROFILE_FAILED, DOCTOR_UPDATE_PROFILE_REQUEST, DOCTOR_UPDATE_PROFILE_SUCCESS
}
  from "../constants/userConstants"

import results from "../results"
import axios from "axios"

export const drLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: DOCTOR_LOGIN_REQUEST
    })
    const config = {
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8000/doctors/login',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type': 'application/json;charset=UTF-8'
      },
      withCredentials: true
    }
    const { data } = await axios.post('http://localhost:8000/doctors/login', { email, password }, config)
    dispatch({
      type: DOCTOR_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('doctorInfo', JSON.stringify(data))
    localStorage.setItem('isLoggedIn', true)



  } catch (error) {
    dispatch({
      type: DOCTOR_LOGIN_FAILED,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}

export const doctorLogout = () => async (dispatch) => {

  try {
    localStorage.removeItem('doctorInfo')
    localStorage.removeItem('isLoggedIn')

    const config = {
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8000/doctors/logout',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type': 'application/json;charset=UTF-8'
      },
      withCredentials: true
    }

    const { data } = await axios.post('http://localhost:8000/doctors/logout', {}, config)

    dispatch({
      type: DOCTOR_LOGOUT_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: DOCTOR_LOGOUT_FAILED,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}






export const doctorRegister = (values) => async (dispatch) => {

  try {

    dispatch({
      type: DOCTOR_REGISTER_REQUEST,
    })
    const config = {
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8000/doctors',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type': 'application/json;charset=UTF-8'
      },
      withCredentials: true
    }

    const { data } = await axios.post('http://localhost:8000/doctors',
      {
        "firstName": values.firstname,
        "lastName": values.lastname,
        "password": values.password,
        "email": values.email,
        "dob": values.age,
        "gender": values.gender,
        "mobilenumber": values.phoneNumber,
        "speciality": values.speciality
      },
      config)

    dispatch({
      type: DOCTOR_REGISTER_SUCCESS,
      payload: data,
    })

    localStorage.setItem('doctorInfo', JSON.stringify(data))
    localStorage.setItem('isLoggedIn', true)

    dispatch({
      type: DOCTOR_LOGIN_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: DOCTOR_REGISTER_FAILED,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}



export const getDoctorDetails = (id) => async (dispatch, getState) => {

  try {
    dispatch({
      type: DOCTOR_DETAILS_REQUEST,
    })
    const { doctorLogin: { doctorInfo } } = getState()

    const config = {
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8000/doctors',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type': 'application/json;charset=UTF-8'
      },
      withCredentials: true
    }

    const { data } = await axios.get
      (`http://localhost:8000/doctors`,
        config)

    dispatch({
      type: DOCTOR_DETAILS_SUCCESS,
      payload: data,
    })


  } catch (error) {
    dispatch({
      type: DOCTOR_REGISTER_FAILED,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}

export const updateDoctorProfile = (doctor) => async (dispatch, getState) => {

  try {
    dispatch({
      type: DOCTOR_UPDATE_PROFILE_REQUEST,
    })
    const { doctorLogin: { doctorInfo } } = getState()

    const config = {
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8000/doctors/edit',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type': 'application/json;charset=UTF-8'
      },
      withCredentials: true
    }

    const { data } = await axios.patch
      (`http://localhost:8000/doctors/edit`,
        {
          "Dname": doctor.Dname,
          "email": doctor.email,
          "dob": doctor.dob,
          "mobilenumber": doctor.mobilenumber,
          "gender": doctor.gender,
          "speciality": doctor.speciality
        },
        config)

    dispatch({
      type: DOCTOR_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: DOCTOR_UPDATE_PROFILE_FAILED,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}