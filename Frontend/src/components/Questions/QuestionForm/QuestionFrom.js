import React, { useRef, useState, useEffect } from "react";
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
    axios.get("PUT FAQ URL HERE").then((result) => setFAQ(result));
  }, []);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(questionContent);
    axios.post("PUT URL HERE");
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
                {/* <MDBAccordionItem collapseId={1} headerTitle="Question #1">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle="Question #2">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle="Question #3">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </MDBAccordionItem> */}
                {FAQ.map((question, idx) => {
                  <MDBAccordionItem
                    collapseId={idx}
                    headerTitle={question.header}
                  >
                    <p>{question.answer}</p>
                  </MDBAccordionItem>;
                })}
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
