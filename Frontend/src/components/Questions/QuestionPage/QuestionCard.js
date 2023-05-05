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
import { useState } from "react";
import axios from "axios";
import timeAgo from "../../../utils/timeAgo";
import headersConfig from "../../../utils/headersConfig";
import { Link } from "react-router-dom";

export default function QuestionCard({
  id,
  title,
  content,
  updateAnswerArray,
  date,
  user,
}) {
  const [postedAnswer, setPostedAnswer] = useState("");
  const postAnswerHandler = async () => {
    const config = headersConfig(`qa/${id}`);
    await axios.patch(
      `http://localhost:8000/qa/${id}`,
      {
        answerObj: { answer: postedAnswer },
      },
      config
    );
    setPostedAnswer("");
    updateAnswerArray();
  };
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
                    <h6 className="fw-bold text-primary mb-1">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={"/profile_info"}
                      >{`${user.firstName} ${user.lastName}`}</Link>
                    </h6>

                    <p className="text-muted small mb-0">{timeAgo(date)}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4>{title}</h4>
                  <p className="mt-3 mb-0 pb-2">{content}</p>
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
                    value={postedAnswer}
                    required={true}
                    onChange={(event) => setPostedAnswer(event.target.value)}
                  />
                </div>
                <div className="float-end mt-2 pt-1">
                  <MDBBtn
                    size="sm"
                    className="me-1"
                    onClick={postAnswerHandler}
                  >
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
