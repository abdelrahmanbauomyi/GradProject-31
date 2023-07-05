import React from "react";
import classes from "./DoctorCard.module.css";
import doctor from "../../../assets/doctor.png";
import ReviewStars from "../../UI/ReviewStars";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctorName, speciality, doctorId }) => {
  const available = false;
  return (
    <div className={classes.card}>
      <div className={classes.preview}>
        <div className={classes.available}>
          <div
            style={{ backgroundColor: available ? "#00FF00" : "grey" }}
            className={classes.dot}
          ></div>
          Available
        </div>
        <div className={classes.rectangle}></div>
        <div className={classes.img}>
          <img src={doctor} alt="doctor" />
        </div>
      </div>
      <div className={classes.info}>
        <Link to={`/doctor/${doctorId}`}>{doctorName}</Link>
        <p>{speciality}</p>
        <div className={classes.rating}>
          <ReviewStars
            width="17.4px"
            height="17.4px"
            color="#4200ff"
            marginRight="10px"
          />
          <p>(102)</p>
        </div>
        <div className={classes.specialty}>
          <h2>specialties</h2>
        </div>
        <button className={classes.button}>Book an Appointment</button>
      </div>
    </div>
  );
};

export default DoctorCard;
