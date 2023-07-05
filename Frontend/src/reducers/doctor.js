import { DOCTOR_LOGIN_FAILED, DOCTOR_LOGIN_REQUEST, DOCTOR_LOGIN_SUCCESS,
     DOCTOR_LOGOUT_SUCCESS, DOCTOR_REGISTER_FAILED, DOCTOR_REGISTER_REQUEST,
      DOCTOR_REGISTER_SUCCESS } from "../constants/userConstants"
import { DOCTOR_DETAILS_FAILED, DOCTOR_DETAILS_REQUEST, DOCTOR_DETAILS_SUCCESS,
     DOCTOR_UPDATE_PROFILE_FAILED, DOCTOR_UPDATE_PROFILE_REQUEST, 
     DOCTOR_UPDATE_PROFILE_SUCCESS } from "../constants/userConstants"




export const doctorLoginReducers = (state = {}, action ) => {
    switch(action.type) {
        case DOCTOR_LOGIN_REQUEST:
            return  {loading :true }
        case DOCTOR_LOGIN_SUCCESS :
        return{loading :false ,doctorInfo:action.payload}
        case DOCTOR_LOGIN_FAILED :
        return{loading :false , error:action.payload}
        case DOCTOR_LOGOUT_SUCCESS:
            return {}
        default : 
        return state 
    }
}

export const doctorRegisterReducers = (state = {}, action ) => {
    switch(action.type) {
        case DOCTOR_REGISTER_REQUEST:
            return  {loading :true }
        case DOCTOR_REGISTER_SUCCESS :
        return{loading :false ,doctorInfo:action.payload}
        case DOCTOR_REGISTER_FAILED:
        return{loading :false , error:action.payload}
       
        default : 
        return state 
    }
}

export const doctorDetailsReducers = (state = {doctor:{}}, action ) => {
    switch(action.type) {
        case DOCTOR_DETAILS_REQUEST:
            return  {...state, loading :true }
        case DOCTOR_DETAILS_SUCCESS :
        return{loading :false ,doctor:action.payload}
        case DOCTOR_DETAILS_FAILED:
        return{loading :false , error:action.payload}
       
        default : 
        return state 
    }
}


export const doctorUpdateReducers = (state = {}, action ) => {
    switch(action.type) {
        case DOCTOR_UPDATE_PROFILE_REQUEST:
            return  { loading :true }
        case DOCTOR_UPDATE_PROFILE_SUCCESS :
        return{loading :false ,success: true , doctorInfo:action.payload}
        case DOCTOR_UPDATE_PROFILE_FAILED:
        return{loading :false , error:action.payload}
       
        default : 
        return state 
    }
}