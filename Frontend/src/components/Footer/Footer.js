import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div style={{ position: "absolute", bottom: "0" }}>
      <MDBFooter className={styles.footer}>
        <MDBContainer className="p-4">
          <section className={styles.col}>
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                  <li>
                    <a href="#!">Link 5</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>{" "}
                  <li>
                    <a href="#!">Link 5</a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0"></MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <p>Follow us</p>
                <p>
                  <MDBBtn
                    outline
                    floating
                    className="m-1"
                    href="#!"
                    role="button"
                  >
                    <MDBIcon fab icon="facebook-f" />
                  </MDBBtn>
                </p>
                <p>
                  <MDBBtn
                    outline
                    floating
                    className="m-1"
                    href="#!"
                    role="button"
                  >
                    <MDBIcon fab icon="twitter" />
                  </MDBBtn>
                </p>
                <p>
                  <MDBBtn
                    outline
                    floating
                    className="m-1"
                    href="#!"
                    role="button"
                  >
                    <MDBIcon fab icon="instagram" />
                  </MDBBtn>
                </p>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a href="/">Clinc Logo</a>
        </div>
      </MDBFooter>
    </div>
  );
};
export default Footer;
