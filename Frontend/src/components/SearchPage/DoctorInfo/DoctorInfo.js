import React from "react";
import classes from "./DoctorInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Rating from "@mui/material/Rating";
import axios from "axios";
import headersConfig from "../../../utils/headersConfig";
import { Link } from "react-router-dom";
import doctorImg from "../../../assets/doctor3.png";

function DoctorInfo({ doctor }) {
  const bookingHandler = () => {
    const config = headersConfig("PUT URL HERE");
    axios.post("PUT URL HERE");
   
  };
  const available = false;
  return (
    <div>
      <div class={classes.doctorCard}>
        <div class={classes.doctorImg}> <img src={doctorImg} alt="doctor" /></div>
        <h2 class={classes.doctorName}>
          <Link to={`/doctor/${doctor.id}`}>{doctor.Dname}</Link>
        </h2>
        <p class={classes.doctorSpecialization}>
          {" "}
          <FontAwesomeIcon className={classes.imgColor1} icon={faStethoscope} />
          {doctor.speciality}
        </p>
        <div className={classes.rating}>
          <Rating
            name="simple-controlled"
            value={4.5}
            readOnly
            precision={0.5}
          />
        </div>
        <p class={classes.doctorCost}>
          {" "}
          <FontAwesomeIcon className={classes.imgColor1} icon={faMoneyBill} />
          Estimated Cost: $100
        </p>
        <p class={classes.doctorLocation}>           <FontAwesomeIcon className={classes.imgColor1} icon={faLocationDot} />{" "}
          {doctor.location}Location: New York</p>
        <p class={classes.doctorWaitingTime}>
          {" "}
          <FontAwesomeIcon className={classes.imgColor1} icon={faClock} />
          Estimated Waiting Time: 30 minutes
        </p>
      </div>
    </div>
  );
}

export default DoctorInfo;

