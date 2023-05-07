import React from "react";
import doctor from "../../assets/doctor2.png";
import classes from "./ReviewSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";




const ReviewSection = () =>{
  return(
    <div className={classes.reviewContainer}>
    <span>
      {" "}
      <Rating
        name="simple-controlled"
        value={4.5}
        readOnly
        precision={0.5}
      />
    </span>
    <div className={classes.reviewHeader}>
      overall Rating
      <span className={classes.reviewRatingContainer}>
        <span className={classes.SubReview}>
          <span className={classes.blueBox}>
            <span className={classes.ratingReview}>5</span>
          </span>
          <span className={classes.subRatingText}>
            Doctor Rating
          </span>
        </span>
      </span>
    </div>
    <div className={classes.reviewComment}>
      ولا يبن المره الشرموطه لو عملت الحركه ديه تانى وانا فجيم
      هنيك اهلك كلهم هنيك كسم اللى جابك يبن المره القحبه و اياك
      تكلم نص كلمه يبن الشراميط يعرص
    </div>
    <span className={classes.reviewName}>محما عسكرى</span>
    <div className={classes.reviewDate}>
      Wednesday, 29 March 2023 08:02 PM
    </div>
  </div>

  );
};

export default ReviewSection;
