import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import QuestionCard from "./QuestionCard";
import Header from "../../Header/Header";

const AllQuestions = () => {
  const [questions, setQuestions] = useState();
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get("http://localhost:8000/qa");
      setQuestions(response.data);
    };
    fetchQuestions();
  }, []);
  if (!questions) return <p>No Questions</p>;
  return (
    <div>
      <Header />
      <h1 className="text-center mt-5">All Questions</h1>
      <div className="d-flex justify-content-center flex-wrap gap-3 mt-5">
        {questions.map((question, idx) => (
          <QuestionCard
            key={idx}
            title={question.title}
            content={question.question}
            id={question.qaId}
          />
        ))}
      </div>
    </div>
  );
};

export default AllQuestions;
