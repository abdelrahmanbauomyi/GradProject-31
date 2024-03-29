import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./DrSideBar.module.css"
import { doctorLogout } from "../../actions/doctorActions";
import { useDispatch,useSelector } from "react-redux";
import {logout} from "../../actions/userActions"
import { Link } from "react-router-dom";

function DrSideBar() {

  const dispatch = useDispatch()
const userLogin = useSelector(state=>state.userLogin)
const {userInfo} = userLogin
const doctorLogin = useSelector(state=>state.doctorLogin)
const {doctorInfo} = doctorLogin

  const logoutHandler = () => {
    dispatch(doctorLogout())
    
  }
  const UserLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="container-fluid" >
    <div className="row">
    <div className={`bg-dark col-md-2 min-vh-100 ${styles.sidebar}`}>
        <a className="text-decoration-none text-blue d-flex align-itemcenter ms-3 mt-2" href="/">
          {/* <i className="fs-4 bi bi-speedometer "></i> */}
          <span className="ms-1 fs-4 ">Online Clinic</span>
        </a>

        {userInfo ? (<div>
        <hr className="text-secondary"/>
        <ul className="nav nav-tabs flex-column">
          <li className="nav-item  text-white fs-4 my-1">
            <Link to="/announcements" className="nav-link text-black fs-5 text-decoration-none" aria-current="page">
              <i className={`bi bi-house-fill `}></i>
              <span className={`ms-2 text-capitalize `}>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item text-white fs-4 my-1">
            <Link to="/edit_profile" className="nav-link text-black fs-5 text-decoration-none " aria-current="page">
            <i className={`bi bi-person-fill   `}></i>
              <span className={`ms-2 text-capitalize`}>Edit Profile</span>
            </Link>
          </li>
          <li className="nav-item text-white fs-4 my-1">
            <Link to="/" className="nav-link text-black fs-5 text-decoration-none " aria-current="page">
            <i className={`bi bi-box-arrow-right   `}></i>
              <span className={`ms-2 text-capitalize `} onClick={UserLogout}>Logout</span>
            </Link>
          </li>
        </ul>
        </div> ) : doctorInfo ? (
          <div>   
            <hr className="text-secondary"/>
              <ul className="nav nav-tabs flex-column">
              <li className="nav-item  text-white fs-4 my-1">
            <Link to="/DrDashBoard" className="nav-link text-black fs-5 text-decoration-none" aria-current="page">
              <i className={`bi bi-house-fill `}></i>
              <span className={`ms-2 text-capitalize `}>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item text-white fs-4 my-1">
            <Link to="/CreateApp" className="nav-link text-black fs-5 text-decoration-none text-transform" aria-current="page">
              <i className={`bi bi-card-list   `}></i>
              <span className={`ms-2 text-capitalize `} >Appointments</span>
            </Link>
          </li>
         
          <li className="nav-item text-white fs-4 my-1">
            <Link to="/DoctorEdit" className={`nav-link text-black fs-5 text-decoration-none  `} aria-current="page">
            <i className={`bi bi-bar-chart-fill   `}></i>
              <span className={`ms-2 text-capitalize `} >Edit Profile</span>
            </Link>
          </li>
          <li className="nav-item text-white fs-4 my-1">
            <Link to="/" className="nav-link text-black fs-5 text-decoration-none " aria-current="page">
            <i className={`bi bi-box-arrow-right   `}></i>
              <span className={`ms-2 text-capitalize `} onClick={logoutHandler}>Logout</span>
            </Link>
          </li>
        </ul>
          </div>
        )
        :(<div></div>)
        }
      </div>
    </div>
  </div>
  
  );
}

export default DrSideBar;
