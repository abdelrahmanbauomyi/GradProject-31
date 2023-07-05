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
import { useSelector } from "react-redux";
import Modal from "../../NavigationBar/Navbar/Modal";
import headersConfig from "../../../utils/headersConfig";
import Header from "../../Header/Header";
import AppointmentModal from "../../Appointment/AppointmentModal";

export default function QuestionForm(props) {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionContent, setQuestionContent] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [FAQ, setFAQ] = useState([]);
  const userLogin = useSelector(state=>state.userLogin)
const {userInfo} = userLogin
  useEffect(() => {
    axios
      .get("http://localhost:8000/faq", {})
      .then((result) => setFAQ((res) => result.data));
  }, []);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (!userInfo) {
      setModal(true);
      setModalMessage("You need to sign in to ask questions.");
      return;
    }
    const config = headersConfig("qa");
    const response = await axios.post(
      "http://localhost:8000/qa",
      {
        title: questionTitle,
        question: questionContent,
      },
      config
    );
    if (response.status === 201) {
      setModal(true);
      setModalMessage("You Question has been posted.");
    } else {
      setModal(true);
      setModalMessage("An error has occurred. Please try again");
    }
    setQuestionTitle("");
    setQuestionContent("");
  };
  return (
    <>
      <Header />
      <MDBContainer className="mt-5">
        <section>
          {modal && (
            <Modal
              onClose={() => {
                setModal(false);
              }}
            >
              <p>{modalMessage}</p>
            </Modal>
          )}

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
                      <p>{question.answer}</p>
                    </MDBAccordionItem>
                  ))}
                </MDBAccordion>
              </MDBContainer>
            </MDBCol>
            <MDBCol lg="6" md="12" className="mt-5">
                <h5 className="fw-bold">
                  Still have any questions? Post your question and our staff
                  will answer.
                </h5>

              <form onSubmit={formSubmitHandler}>
                <MDBInput
                  label="Question Title"
                  required
                  value={questionTitle}
                  className="mb-4"
                  onChange={(event) => setQuestionTitle(event.target.value)}
                />

                <MDBTextArea
                  rows={4}
                  label="Your Question"
                  value={questionContent}
                  className="mb-4"
                  onChange={(event) => setQuestionContent(event.target.value)}
                />
                <MDBBtn block>Post</MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </>
  );
}
