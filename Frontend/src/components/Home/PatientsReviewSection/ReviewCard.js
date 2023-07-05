import classes from "./ReviewCard.module.css";
import React from "react";
import image from "../../../assets/image.png";

import ReviewStars from "../../UI/ReviewStars";

const ReviewCard = ({review}) => {
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
        <h2 className={classes.name}>{review.User.firstName } {review.User.lastName}</h2>
        <h3 className={classes.speciality}>
          {review.Doctor.Dname}
        </h3>
        <ReviewStars
          width="0.85625rem"
          height="0.85625rem"
          color="#4200ff"
          marginRight="1px"
          count = {review.rating}
        />

        <p className={classes.review}>
          { 
            review.comment}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
