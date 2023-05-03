import React, {  useLayoutEffect, useState } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import QuestionCard from "./QuestionCard";
import QuestionAnswers from "./QuestionAnswers";
import { useParams } from "react-router-dom";
import axios from "axios";

const QuestionPage = () => {
  const params = useParams();
  const id = params.questionId;
  const [question, setQuestion] = useState({});
  const [updateAnswer, setUpdateAnswer] = useState(false); // boolean variable to update the answers array
  const updateAnswerArray =  async () =>
  await setUpdateAnswer((updateAnswer) => !updateAnswer);
    
  
  useLayoutEffect(() => {
    axios
      .get(`http://localhost:8000/qa/${id}`)
      .then((response) =>setQuestion((response.data)));
  }, [updateAnswer,id]);
  return (
    <MDBContainer>
      <QuestionCard
        id={id}
        title={question.title}
        content={question.question}
        updateAnswerArray={updateAnswerArray}
        date= {question.date}
      />
      <QuestionAnswers id={id} answers={question.answers} />
    </MDBContainer>
  );
};

export default QuestionPage;
