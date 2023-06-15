import React from "react";
import classes from "./DoctorPageCard.module.css";
import { Rating } from "@mui/material";

const DoctorPageCard = () => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.mainProfile}>
        <div className={classes.imgHolder}>
          <div className={classes.img}></div>
        </div>
        <div className={classes.doctorDetails}>
          <span className={classes.titleFlex}>
            <span className={classes.titleText}>
              <h3>
                Doctor
                <span> Mohamed Osama</span>
              </h3>
            </span>
            <span className={classes.viewCount}>50 views</span>
          </span>
          <h2 className={classes.spec}>
            Professor and Consultant of Cardiology & Cardiovascular diseases -
            AL Azhar university
          </h2>
          <div className={classes.cardFotter}>
            <span>
              <Rating
                name="simple-controlled"
                value={4.5}
                readOnly
                precision={0.5}
              />
            </span>
            <span className={classes.ratingNumber}>
              Overall Rating From 1463 Visitors
            </span>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className={classes.link}
            >
              show all reviews
            </a>
          </div>
          <div className={classes.pinnedComment}>
            <span className={classes.commentDes}>
                          </span>
            <div className={classes.pinnedCommentReview}>
              
              <span className={classes.commentRating}>
                <Rating
                  name="simple-controlled"
                  value={4.5}
                  readOnly
                  precision={0.5}
                />
              </span>
              <span className={classes.commentName}></span>
              <span className={classes.pinnedCommentDate}>
                Sunday, 20 September 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPageCard;
