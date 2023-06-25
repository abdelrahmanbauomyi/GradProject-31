import {
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILED,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILED,
    USER_LOGIN_REQUEST,
    USER_REGISTER_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_REQUEST,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAILED,
  } from "../constants/userConstants";
import axios from "axios";
import headersConfig from "../utils/headersConfig";
  
export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST
      })
      const config = {
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:8000/users/login',
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          'Content-Type': 'application/json;charset=UTF-8'
        },
        withCredentials: true
      }
      console.log(email, password)
      const { data } = await axios.post('http://localhost:8000/users/login', {
        "email": email,
        "password": password
      }, config)
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      })
    }
  }
  
  export const logout = () => async (dispatch) => {
    try {
      localStorage.removeItem('userInfo')
      dispatch({
        type: USER_LOGOUT_REQUEST
      })
      const config = headersConfig('users/logout')
      const { data } = await axios.post('http://localhost:8000/users/logout', {}
        , config)

      dispatch({
        type: USER_LOGOUT_SUCCESS
      })
    } catch (error) {
      dispatch({
        type: USER_LOGOUT_FAILED,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      })
    }
  }
  
  
  
  export const register = (values) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })
  
      const config = {
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:8000/users',
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          'Content-Type': 'application/json;charset=UTF-8'
        },
        withCredentials: true
      }
      console.log("Sending")
      const { data } = await axios.post('http://localhost:8000/users',
        {
          "firstName": values.firstname,
          "lastName": values.lastname,
          "password": values.password,
          "email": values.email,
          "dob": values.age,
          "gender": values.gender,
          "mobilenumber": values.phoneNumber
        },
        config)
  
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })
  
      
    localStorage.setItem('userInfo', JSON.stringify(data))
    localStorage.setItem('isLoggedIn', true)


      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAILED,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      })
    }
    console.log("sent")
  }
  
  export const getUserDetails = (id) => async (dispatch, getState) => {
  
    try {
      dispatch({
        type: USER_DETAILS_REQUEST,
      })
      const { userLogin: { userInfo } } = getState()
  
      const config = {
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:8000/users',
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          'Content-Type': 'application/json;charset=UTF-8'
        },
        withCredentials: true
      }
  
      const { data } = await axios.get
        (`http://localhost:8000/users`,
          config)
  
      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data,
      })
  
    
  
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAILED,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      })
    }
  }
  
  export const updateUserProfile = (user) => async (dispatch, getState) => {
  
    try {
      dispatch({
        type: USER_UPDATE_PROFILE_REQUEST,
      })
      const { userLogin: { userInfo } } = getState()
  
      const config = {
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:8000/users/edit',
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          'Content-Type': 'application/json;charset=UTF-8'
        },
        withCredentials: true
      }
  
      const { data } = await axios.patch
        (`http://localhost:8000/users/edit`,
          {
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": user.email,
            "password": user.password,
            "dob": user.dob,
            "mobilenumber": user.mobilenumber,
            "gender": user.gender
          },
          config)
  
      dispatch({
        type: USER_UPDATE_PROFILE_SUCCESS,
        payload: data,
      })
      localStorage.setItem('userInfo', JSON.stringify(data))
  
    } catch (error) {
      dispatch({
        type: USER_UPDATE_PROFILE_FAILED,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      })
    }
  }
  