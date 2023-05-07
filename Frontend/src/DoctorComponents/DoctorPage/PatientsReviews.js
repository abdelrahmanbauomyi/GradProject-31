import React from "react";
import classes from "./PatientsReviews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";

import ReviewSection from "./ReviewSection";







const PatientsReviews = () => {
  return(
    <div className={classes.patientsReviews}>
    <div className={classes.title}>
      <span className={classes.rIcon}>
        {" "}
        <FontAwesomeIcon
          className={classes.imgColor1}
          icon={faStarHalfStroke}
        />
      </span>
      <span>Patients' Reviews</span>
    </div>
    <div className={classes.rating}>
      <Rating
        name="simple-controlled"
        value={4.5}
        readOnly
        precision={0.5}
      />
      <h3>Overall Rating</h3>
      <div>From N Visitors</div>
    </div>
    <div className={classes.gridRating}>
      <span className={classes.starsRating}>
        <Rating
          name="simple-controlled"
          value={4.5}
          readOnly
          precision={0.5}
        />
        <span className={classes.starsRatingP}>
          Assistant Rating
        </span>
      </span>
      <span className={classes.starsRating}>
        <Rating
          name="simple-controlled"
          value={4.5}
          readOnly
          precision={0.5}
        />
        <span className={classes.starsRatingP}>Clinic Rating</span>
      </span>
      <span className={classes.numberRating}>
        <span className={classes.bluebox}>
          <span className={classes.a7a}>4.5 </span>/ 5
        </span>
        <span className={classes.numberRatingp}>Doctor Rating</span>
      </span>
    </div>
    <div className={classes.divider}></div>
    <ReviewSection />
  </div>
  );
  
};

export default PatientsReviews;