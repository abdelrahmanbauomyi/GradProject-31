import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
} from "../constants/userConstants";
import results from "../results";
  

export const login = (email,password,name) => async (dispatch) => {
  try {
      dispatch({
          type:USER_LOGIN_REQUEST
      })
      const config ={
          headers:{
              'Content-type':'application/json'
          },
      }
      const {data}= await results.post('/users.json',{email,password,name},config)
      dispatch({
          type:USER_LOGIN_SUCCESS,
          payload:data,
      })
      localStorage.setItem('userInfo',JSON.stringify(data))
  } catch (error) {
      dispatch({type:USER_LOGIN_FAILED,
          payload : error.response && error.response.data.message
          ? error.response.data.message
          :error.message,
          })
  }
  }

export const logout =()=> (dispatch)=> {
  localStorage.removeItem('userInfo')
  dispatch({
      type:USER_LOGOUT
  })

}
