import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userDetailsReducers, userLoginReducers, userRegisterReducers, userUpdateReducers } from "./reducers/auth";
import {doctorLoginReducers,doctorRegisterReducers ,doctorDetailsReducers,doctorUpdateReducers} from './reducers/doctor'
import { searchReducer } from "./reducers/searchReducer";
const reducer = combineReducers({
  userLogin: userLoginReducers,
  searchFilters: searchReducer,
  userRegister:userRegisterReducers,
  userDetails:userDetailsReducers,
  userUpdateProfile:userUpdateReducers,
  doctorLogin:doctorLoginReducers,
  DoctorRegister:doctorRegisterReducers,
  doctorDetails:doctorDetailsReducers,
  doctorUpdateProfile:doctorUpdateReducers,
});
 
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const doctorInfoFromStorage = localStorage.getItem("doctorInfo")
  ? JSON.parse(localStorage.getItem("doctorInfo"))
  : null;
  const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    userRegister: { userInfo: userInfoFromStorage },
    userUpdateProfile:{userInfo:userInfoFromStorage},
    userDetails:{userInfo:userInfoFromStorage},
    doctorLogin: { doctorInfo: doctorInfoFromStorage },
    DoctorRegister: { doctorInfo: doctorInfoFromStorage },
    doctorUpdateProfile: { doctorInfo: doctorInfoFromStorage }
  };
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
//  composeWithDevTools(applyMiddleware(...middleware))
applyMiddleware(thunk)
);

export default store;