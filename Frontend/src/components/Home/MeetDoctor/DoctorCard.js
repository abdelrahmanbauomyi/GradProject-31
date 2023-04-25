import React from "react";
import classes from "./DoctorCard.module.css";
import doctor from "../../../assets/doctor.png";
import ReviewStars from "../../UI/ReviewStars";

const DoctorCard = ({ doctorName, speciality }) => {
  const avaliable = false;
  return (
    <div className={classes.card}>
      <div className={classes.preview}>
        <div className={classes.available}>
          <div
            style={{ backgroundColor: avaliable ? "#00FF00" : "grey" }}
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
        <h2>doctorName</h2>
        <p>speciality</p>
        <div className={classes.rating}>
          <ReviewStars
            width="17.4px"
            height="17.4px"
            color="#4200ff"
            marginRight="10px"
          />
          <p>(102)</p>
        </div>
        <button className={classes.button}>Book an Appointment</button>
      </div>
    </div>
  );
};

export default DoctorCard;
