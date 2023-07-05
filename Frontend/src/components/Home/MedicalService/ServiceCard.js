import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from "./ServiceCard.module.css";




const ServiceCard = (props) => {
  return (
    <div >
      <div className={classes.card}>
      <FontAwesomeIcon className={classes.imgColor1} icon={props.icon} />
<p>{props.para}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
