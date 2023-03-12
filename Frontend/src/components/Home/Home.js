import React, { Fragment } from "react";
import LatestArticle from "./ArticleSection/LatestArticle";
import PatientReview from "./PatientsReviewSection/PatientReview";

const Home = () => {
  return (
    <Fragment>
      <PatientReview />
      <LatestArticle />
    </Fragment>
  );
};

export default Home;
