import React from "react";
import classes from "./MeetDoctor.module.css";
import DoctorCard from "./DoctorCard"
import Section from "../../UI/Section"
import useWidthAndHeight from "../../../hooks/useWidthAndHeight";
import { redirect, useNavigate } from "react-router-dom";


const MeetDoctor = () => {
  const navigate = useNavigate()
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
        <DoctorCard />
        <DoctorCard />
         <DoctorCard />
         <DoctorCard />
        </div>
        <div className={classes.loc}>
        <button onClick={()=>navigate('/search')} className={classes.button}>See More </button>
        </div>
    </Section>
  );
}

export default MeetDoctor;