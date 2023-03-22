import React from "react";
import classes from "./MeetDoctor.module.css";
import DoctorCard from "./DoctorCard"
import Section from "../../UI/Section"
import useWidthAndHeight from "../../../hooks/useWidthAndHeight";


const MeetDoctor = () => {
  const [width] = useWidthAndHeight();

  if(width < 600) {
    return (
    <Section title="Meet Our Doctors" paragraph="Well qualified doctors ready to serve you">
    <div className={classes.container}>
     <div className={classes.flex}>
     <DoctorCard />
     <DoctorCard />
     </div>
     </div>
     <div className={classes.button}>See More </div>
 </Section>
);
  }
  return (
    <Section title="Meet Our Doctors" paragraph="Well qualified doctors ready to serve you">
       <div className={classes.container}>
        <div className={classes.flex}>
        <DoctorCard />
        <DoctorCard />
         <div className={classes.three}>
         <DoctorCard />
         </div>
         <div className={classes.four}>
         <DoctorCard />
         </div>
        </div>
        <button className={classes.button}>See More </button>
        </div>
    </Section>
  );
}

export default MeetDoctor;