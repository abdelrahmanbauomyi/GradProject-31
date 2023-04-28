import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import QuestionCard from "./QuestionCard";
import QuestionAnswers from "./QuestionAnswers";
import { useParams } from "react-router-dom";

const QuestionPage = () => {
  const params = useParams();
  return (
    <MDBContainer>
      <QuestionCard id={params.id}/>
      <QuestionAnswers />
    </MDBContainer>
  );
};

export default QuestionPage;
