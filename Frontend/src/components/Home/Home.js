import React, { Fragment } from "react";
import LatestArticle from "./ArticleSection/LatestArticle";
import MedicalService from "./MedicalService/MedicalService";
import MeetDoctor from "./MeetDoctor/MeetDoctor";
import PatientReview from "./PatientsReviewSection/PatientReview";

const Home = () => {
  return (
    <Fragment>
      <MedicalService />
      <PatientReview />
      <MeetDoctor />
      <LatestArticle />
    </Fragment>
  );
};

export default Home;
