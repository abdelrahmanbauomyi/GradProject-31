import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./DrSideBar.module.css"
import { doctorLogout } from "../../actions/doctorActions";
import { useDispatch,useSelector } from "react-redux";
function DrSideBar() {

  const dispatch = useDispatch()
  const doctorLogin = useSelector(state=>state.doctorLogin)
const {doctorInfo} = doctorLogin

  const logoutHandler = () => {
    dispatch(doctorLogout())
  }

  return (
    <div className="container-fluid" >
    <div className="row">
    <div className={`bg-dark col-md-2 min-vh-100 ${styles.sidebar}`}>
        <a className="text-decoration-none text-blue d-flex align-itemcenter ms-3 mt-2">
          {/* <i className="fs-4 bi bi-speedometer "></i> */}
          <span className="ms-1 fs-4 ">Online Clinic</span>
        </a>
        <hr className="text-secondary"/>
        <ul className="nav nav-tabs flex-column">
          <li className="nav-item  text-white fs-4 my-1">
            <a href="/DrDashBoard" className="nav-link text-black fs-5 text-decoration-none" aria-current="page">
              <i className={`bi bi-house-fill `}></i>
              <span className={`ms-2 text-capitalize `}>Dashboard</span>
            </a>
          </li>
          <li className="nav-item text-white fs-4 my-1">
            <a href="/CreateApp" className="nav-link text-black fs-5 text-decoration-none text-transform" aria-current="page">
              <i className={`bi bi-card-list   `}></i>
              <span className={`ms-2 text-capitalize `} >Appointments</span>
            </a>
          </li>
         
          <li className="nav-item text-white fs-4 my-1">
            <a href="#" className={`nav-link text-black fs-5 text-decoration-none  `} aria-current="page">
            <i className={`bi bi-bar-chart-fill   `}></i>
              <span className={`ms-2 text-capitalize `} >Tables</span>
            </a>
          </li>
          <li className="nav-item text-white fs-4 my-1">
            <a href="#" className="nav-link text-black fs-5 text-decoration-none " aria-current="page">
            <i className={`bi bi-grid-fill   `}></i>
              <span className={`ms-2 text-capitalize `}>Articles</span>
            </a>
          </li>
          <li className="nav-item text-white fs-4 my-1">
            <a href="/DoctorEdit" className="nav-link text-black fs-5 text-decoration-none " aria-current="page">
            <i className={`bi bi-person-fill   `}></i>
              <span className={`ms-2 text-capitalize`}>Profile</span>
            </a>
          </li>
          <li className="nav-item text-white fs-4 my-1">
            <a href="/HomePage" className="nav-link text-black fs-5 text-decoration-none " aria-current="page">
            <i className={`bi bi-box-arrow-right   `}></i>
              <span className={`ms-2 text-capitalize `} onClick={logoutHandler}>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  );
}

export default DrSideBar;
