import classes from "./ReviewCard.module.css";
import React from "react";
import image from "../../../assets/image.png";
import ReviewStars from "../../UI/ReviewStars";

const ReviewCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.profile}>
          <div className={classes["img-background"]}></div>
          <div className={classes.img}>
            <img src={image} alt="Profile" />
          </div>
        </div>
      </div>
      <div className={classes.information}>
        <h2 className={classes.name}>Sara Ali Khan</h2>
        <h3 className={classes.speciality}>Cardiologist Patient</h3>
        <ReviewStars
          width="0.85625rem"
          height="0.85625rem"
          color="#4200ff"
          marginRight="0.25rem"
        />
        <p className={classes.review}>
          Thanks for all the services, no doubt it is the best hospital.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
