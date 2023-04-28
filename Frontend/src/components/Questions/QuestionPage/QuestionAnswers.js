import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import QuestionCard from "./QuestionCard";

const QuestionAnswers = () => {
  return (
    <MDBContainer>
      <MDBContainer className="mt-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="12">
            <MDBCard
              className="shadow-0 border"
              style={{ backgroundColor: "#f0f2f5" }}
            >
              <MDBCardBody>
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <p>Type your note, and hit enter to add it</p>

                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                          alt="avatar"
                          width="25"
                          height="25"
                        />
                        <p className="small mb-0 ms-2">Martha</p>
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

                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <p>Type your note, and hit enter to add it</p>

                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                          alt="avatar"
                          width="25"
                          height="25"
                        />
                        <p className="small mb-0 ms-2">Johny</p>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <p className="small text-muted mb-0">Upvote?</p>
                        <MDBIcon
                          far
                          icon="thumbs-up mx-2 fa-xs text-black"
                          style={{ marginTop: "-0.16rem" }}
                        />
                        <p className="small text-muted mb-0">4</p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <p>Type your note, and hit enter to add it</p>

                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                          alt="avatar"
                          width="25"
                          height="25"
                        />
                        <p className="small mb-0 ms-2">Mary Kate</p>
                      </div>
                      <div className="d-flex flex-row align-items-center text-primary">
                        <p className="small mb-0">Upvoted</p>
                        <MDBIcon
                          fas
                          icon="thumbs-up mx-2 fa-xs"
                          style={{ marginTop: "-0.16rem" }}
                        />
                        <p className="small mb-0">2</p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <p>Type your note, and hit enter to add it</p>

                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                          alt="avatar"
                          width="25"
                          height="25"
                        />
                        <p className="small mb-0 ms-2">Johny</p>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <p className="small text-muted mb-0">Upvote?</p>
                        <MDBIcon
                          far
                          icon="thumbs-up mx-2 fa-xs text-black"
                          style={{ marginTop: "-0.16rem" }}
                        />
                        <p className="small text-muted mb-0"></p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
};

export default QuestionAnswers;
