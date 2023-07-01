import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import styles from './Footer.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {FaFacebookF } from "react-icons/fa";
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"


const Footer =() => {
  return (
    <>
    <MDBFooter className={styles.footer} >
    
      <MDBContainer className='p-4'>
        <section className={styles.col}>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Have a questions?</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/skeleton' >
                    Interactive dignosis
                  </a>
                </li>
                <li>
                  <a href='/Contact Us' >
                    Contact us
                  </a>
                </li>
                <li>
                  <a href='/ask' >
                    FAQs or Ask your Question!
                  </a>
                </li>
                {/* <li>
                  <a href='#!' >
                    Link 4
                  </a>
                </li>
                <li>
                  <a href='#!' >
                    Link 5
                  </a>
                </li> */}
              </ul>
            </MDBCol>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Check our Doctors!</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='search' >
                    Doctors
                  </a>
                </li>
                {/* <li>
                  <a href='#!' >
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' >
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' >
                    Link 4
                  </a>
                </li> <li>
                  <a href='#!' >
                    Link 5
                  </a>
                </li> */}
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <p>Follow us!</p>
              <p>
            <MDBBtn outline  floating className='m-1' href='#!' role='button'>
            <i><BsInstagram/></i>
            </MDBBtn>
            </p>
            <p>
            <MDBBtn outline  floating className='m-1' href='#!' role='button'>
            <i><BsTwitter/></i>
          </MDBBtn>
          </p>
          <p>
          <MDBBtn outline  floating className='m-1' href='#!' role='button'>
           <i><FaFacebookF/></i>
          </MDBBtn>
          </p>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a  href='/'>
          Clinc Logo
        </a>
      </div>
    </MDBFooter>
    </>
  );
}
export default Footer;