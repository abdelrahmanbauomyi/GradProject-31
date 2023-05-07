import React from "react";
import classes from "./DoctorInfo.module.css";
import doctor from "../../../assets/doctor2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Rating from "@mui/material/Rating";
import Scheduler from "../../UI/Scheduler";
import axios from "axios";
import headersConfig from "../../../utils/headersConfig";

function DoctorInfo() {
  const bookingHandler = () => {
    const config = headersConfig("PUT URL HERE")
    axios.post("PUT URL HERE");
  };
  return (
    <div>
      <div className={classes.gridcontainer}>
        <div className={classes.item1}>
          <h2>Doctor ma7ma 3askary</h2>
          <p>Professor in Dermatology,askdhaskdhas,asdkahsdk</p>
          <div className={classes.rating}>
            <Rating
              name="simple-controlled"
              value={4.5}
              readOnly
              precision={0.5}
            />
          </div>
        </div>
        <div className={classes.item2}>
          <div className={classes.img}>
            <img src={doctor} alt="doctor" />
          </div>
        </div>
        <div className={classes.item3}>
          {" "}
          <div className={classes.info2}>
            <div>
              <FontAwesomeIcon
                className={classes.imgColor1}
                icon={faStethoscope}
              />
              andrologist specialsidal asodiasodia
            </div>
            <div>
              <FontAwesomeIcon
                className={classes.imgColor1}
                icon={faLocationDot}
              />{" "}
              el 3asher
            </div>
            <div>
              <FontAwesomeIcon
                className={classes.imgColor1}
                icon={faMoneyBill}
              />
              500 LE
            </div>
            <div>
              <FontAwesomeIcon className={classes.imgColor1} icon={faClock} /> 1
              : 30 hours reamaining
            </div>
          </div>
        </div>
        <div className={classes.item4}>
          <Scheduler />
        </div>
      </div>
      <button onClick={bookingHandler}></button>
    </div>

  );
}

export default DoctorInfo;
