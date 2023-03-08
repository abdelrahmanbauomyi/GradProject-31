import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classes from "./ReviewStars.module.css";

const ReviewStars = () => {
  return (
    <div className={classes.stars}>
      <span>
        <FontAwesomeIcon icon={faStar} className={classes.icon} />
      </span>
      <span>
        <FontAwesomeIcon icon={faStar} className={classes.icon} />
      </span>
      <span>
        <FontAwesomeIcon icon={faStar} className={classes.icon} />
      </span>
      <span>
        <FontAwesomeIcon icon={faStar} className={classes.icon} />
      </span>
      <span>
        <FontAwesomeIcon icon={faStar} className={classes.icon} />
      </span>
    </div>
  );
};

export default ReviewStars;
