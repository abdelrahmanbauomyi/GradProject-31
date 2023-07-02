import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import QuestionCard from "./QuestionCard";

const AllQuestions = () => {
  const [questions, setQuestions] = useState();
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get("PUT URL HERE");
      setQuestions(response.data);
    };
    fetchQuestions;
  }, []);
  if (!questions) return <p>No Questions</p>;
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {questions.map((question, idx) => (
        <QuestionCard
          key={idx}
          title={question.title}
          content={question.content}
          id={question.id}
        />
      ))}
    </div>
  );
};

export default AllQuestions;
