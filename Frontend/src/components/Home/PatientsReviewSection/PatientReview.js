import React from "react";
import Section from "../../UI/Section";
import SliderComponent from "./SliderComponent";

const PatientReview = () => {
  return (
    <Section
      title="Patients Reviews"
      paragraph="Let’s see what our happy patients says"
    >
      <SliderComponent />
    </Section>
  );
};

export default PatientReview;
