import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

const QuestionAnswers = ({ id, answers }) => {
  return (
    <MDBContainer>
      <MDBContainer className="mt-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="12">
            {answers &&
              answers.length > 0 &&
              answers.map((answer , idx) => (
                <MDBCard className="mb-4" key={idx}>
                  <MDBCardBody>
                    <h5>{answer.answerContent}</h5>

                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                          alt="avatar"
                          width="25"
                          height="25"
                        />
                        <p className="small mb-0 ms-2">{answer.Doctor.Dname}</p>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <p className="small text-muted mb-0">Upvote?</p>
                        <MDBIcon
                          far
                          icon="thumbs-up mx-2 fa-xs text-black"
                          style={{ marginTop: "-0.16rem" }}
                        />
                        <p className="small text-muted mb-0">3</p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              ))}
            {!answers && <p>No Answers</p>}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
};

export default QuestionAnswers;
