import React from "react";
import classes from "./DoctorCard.module.css";
import doctor from "../../../assets/doctor.png";
import ReviewStars from "../../UI/ReviewStars";
import "./chatGPT.css";
const DoctorCard = () => {
  const avaliable = false;
  return (
    /*  <div class="doctor-card">
      <div class="doctor-image">
        <img src={doctor} alt="Doctor's Photo" />
      </div>
      <div class="doctor-info">
        <h2 class="doctor-name">Dr. John Doe</h2>
        <h3 class="doctor-speciality">Cardiologist</h3>
        <p class="doctor-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
          tortor sed leo lobortis dapibus non vel mi. Integer commodo felis vel
          convallis tempus. Sed auctor lobortis ante, sit amet convallis urna
          faucibus sed. In commodo eros at lorem sagittis, at ultrices quam
          varius.
        </p>
        <div class="doctor-contact">
          <a href="tel:123-456-7890">Call</a>
          <a href="mailto:john.doe@example.com">Email</a>
        </div>
      </div>
    </div> */
    <div className={classes.card}>
      <div className={classes.preview}>
        <div className={classes.available}>Available</div>
        <div className={classes.rectangle}></div>
        <div className={classes.img}>
          <img src={doctor} alt="doctor" />
        </div>
      </div>
      <div className={classes.info}>
        <h2>Dr Name</h2>
        <p>Cardiologist</p>
        <div className={classes.rating}>
          <ReviewStars
            width="17.4px"
            height="17.4px"
            color="#4200ff"
            marginRight="10px"
          />
          <p>(102)</p>
        </div>
        <button className={classes.button}>Book an Appointment</button>
      </div>
    </div>
  );
};

export default DoctorCard;
