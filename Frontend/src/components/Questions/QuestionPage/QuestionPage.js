import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import QuestionCard from "./QuestionCard";
import QuestionAnswers from "./QuestionAnswers";

const QuestionPage = () => {
  return (
    <MDBContainer>
      <QuestionCard />
      <QuestionAnswers />
    </MDBContainer>
  );
};

export default QuestionPage;
