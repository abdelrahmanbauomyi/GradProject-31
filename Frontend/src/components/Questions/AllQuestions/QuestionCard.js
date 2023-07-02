import { Link } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const QuestionCard = ({ id, title, content }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Link to={`/questions/${id}`} className="btn btn-outline-primary">
          Go To Question
        </Link>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
