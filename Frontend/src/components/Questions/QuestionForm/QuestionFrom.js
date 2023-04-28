import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTextArea,
  MDBAccordion,
  MDBAccordionItem,
} from "mdb-react-ui-kit";
import axios from "axios";

export default function QuestionForm(props) {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionContent, setQuestionContent] = useState("");
  const [FAQ, setFAQ] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/qa")
      .then((result) => setFAQ((res) => result.data));
  }, []);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(questionContent);
    axios.post("http://localhost:8000/qa", {
      title: questionTitle,
      question: questionContent,
    });
  };
  return (
    <MDBContainer
      className="mt-5"
      style={
        {
          /* maxWidth: "1000px" */
        }
      }
    >
      <section>
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4">
            <MDBContainer
              className="mt-5"
              style={
                {
                  /* maxWidth: "1000px" */
                }
              }
            >
              <h3 style={{ textAlign: "center", marginBottom: "25px" }}>
                Frequently Asked Questions
              </h3>
              <MDBAccordion alwaysOpen initialActive={1}>
                {FAQ.map((question, idx) => (
                  <MDBAccordionItem
                    collapseId={idx + 1}
                    headerTitle={question.question}
                  >
                    <p>{question.answers}</p>
                  </MDBAccordionItem>
                ))}
              </MDBAccordion>
            </MDBContainer>
          </MDBCol>
          <MDBCol lg="6" md="12" className="text-center mt-5">
            <p>
              <h5 class="fw-bold">
                Still have any questions? Post your question and our staff will
                answer.
              </h5>
            </p>

            <form onSubmit={formSubmitHandler}>
              <MDBInput
                label="Question Title"
                required
                className="mb-4"
                onChange={(event) => setQuestionTitle(event.target.value)}
              />
              <MDBTextArea
                rows={4}
                label="Your Question"
                className="mb-4"
                onChange={(event) => setQuestionContent(event.target.value)}
              />
              <MDBBtn block>Post</MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}
