import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const QuestionCard = ({ id, title, content }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Title: {title}</Card.Title>
        <Card.Text>Question: {content}</Card.Text>
        <Link to={`/questions/${id}`}>Go To Question</Link>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
