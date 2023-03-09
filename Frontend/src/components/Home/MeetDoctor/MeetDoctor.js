import React from "react";
import classes from "./MeetDoctor.module.css";
import DoctorCard from "./DoctorCard"
import Section from "../../UI/Section"


const MeetDoctor = () => {

  return (
    <Section title="Meet Our Doctors" paragraph="Well qualified doctors ready to serve you">
       <div className={classes.container}>
        <div className={classes.flex}>
         <DoctorCard></DoctorCard>
         <DoctorCard></DoctorCard>
         <div className={classes.three}>
         <DoctorCard ></DoctorCard>
         </div>
         <div className={classes.four}>
         <DoctorCard ></DoctorCard>
         </div>
        </div>
        </div>
        <div className={classes.button}>See More </div>
    </Section>
  );
}

export default MeetDoctor;