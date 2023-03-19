import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTruckMedical } from '@fortawesome/free-solid-svg-icons'
import classes from "./ServiceCard.module.css";
import { faFlaskVial } from '@fortawesome/free-solid-svg-icons'


const ServiceCard = () => {
  return (
    <div >
      <div className={classes.card}>
      <FontAwesomeIcon className={classes.imgColor1} icon={faFlaskVial} />
<p>Well equipped lab</p>
      </div>
    </div>
  );
};

export default ServiceCard;
