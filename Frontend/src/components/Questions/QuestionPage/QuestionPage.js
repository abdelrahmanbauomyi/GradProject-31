import React, { useEffect, useState } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import QuestionCard from "./QuestionCard";
import QuestionAnswers from "./QuestionAnswers";
import { useParams } from "react-router-dom";
import axios from "axios";

const QuestionPage = () => {
  const params = useParams();
  const id = params.id;
  const [question, setQuestion] = useState({});
  useEffect(() => {
    axios
      .get(`PUT URL HERE/${id}`)
      .then((response) => setQuestion(response.data));
  }, []);
  return (
    <MDBContainer>
      <QuestionCard
        id={params.id}
        title={question.title}
        content={question.content}
      />
      <QuestionAnswers id={params.id} answers={question.answers}/>
    </MDBContainer>
  );
};

export default QuestionPage;
