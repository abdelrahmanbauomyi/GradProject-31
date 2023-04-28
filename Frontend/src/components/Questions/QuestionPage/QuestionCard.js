import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function QuestionCard({ id }) {
  const [question, setQuestion] = useState({});
  useEffect(() => {
    axios.get(`PUT UEL HERE/${id}`).then((question) => setQuestion(question));
  }, []);
  return (
    <section className="">
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="12" xl="12">
            <MDBCard>
              <MDBCardBody>
                <div className="d-flex flex-start align-items-center mb-4 ">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>

                    <p className="text-muted small mb-0">
                      Shared publicly - Jan 2020
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h4>{question.title}</h4>
                  <p className="mt-3 mb-0 pb-2">{question.content}</p>
                </div>
              </MDBCardBody>

              <MDBCardFooter
                className="py-4 px-4 border-0 "
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex flex-start w-100">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                    alt="avatar"
                    width="40"
                    height="40"
                  />
                  <MDBTextArea
                    label="Answer"
                    id="textAreaExample"
                    rows={4}
                    style={{ backgroundColor: "#fff", resize: "none" }}
                    wrapperClass="w-100"
                  />
                </div>
                <div className="float-end mt-2 pt-1">
                  <MDBBtn size="sm" className="me-1">
                    Post Answer
                  </MDBBtn>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
