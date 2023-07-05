import React from "react";
import classes from "./AboutDoctor.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";
import BookingSection from "./BookingSection";
import PatientsReviews from "./PatientsReviews";



const AboutDoctor = ()=> {
  return(
    <div className={classes.aboutContainer}>
    <div className={classes.titleContainer}>
      <span className={classes.icon}>
        {" "}
        <FontAwesomeIcon
          className={classes.imgColor1}
          icon={faCircleInfo}
        />
      </span>
      <span className={classes.about}> about the doctor</span>
    </div>
    <div className={classes.details}>
      <span>
        MS.c and MD of Cardiology & Cardiovascular diseases - AL
        Azhar university. Cardiac Catheter Consultant - Fellow of
        the European Heart Association .
      </span>
    </div>
  </div>
  );

};


export default AboutDoctor;