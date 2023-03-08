import React from "react";
import classes from "./DoctorCard.module.css";
import doctor from "../../assets/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReviewStars from "../UI/ReviewStars";

const DoctorCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.preview}>
        <div className={classes.available}>Available</div>
        <div className={classes.rectangle}></div>
        <div className={classes.img}>
          <img src={doctor} />
        </div>
      </div>
      <div className={classes.info}>
        <h2>Dr Name</h2>
        <p>Cardiologist</p>
        <div className={classes.rating}>
          <ReviewStars />
          <p>(102)</p>
        </div>
        <button className={classes.button}>Book an Appointment</button>
      </div>
    </div>
  );
};

export default DoctorCard;
