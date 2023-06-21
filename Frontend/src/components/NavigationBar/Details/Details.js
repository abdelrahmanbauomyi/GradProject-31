import React from "react";
import { Container, Button, NavLink } from "react-bootstrap";
import styles from "./Details.module.css";
import CircularImage from "./CircularImage";
import SearchCard from "../Cards/SearchCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignUpForm from "../Navbar/SignUpForm"
import {BsPlay,BsFillArrowRightCircleFill } from "react-icons/bs";
import {GrPlay} from "react-icons/gr"
import {TbPlayerPlay} from "react-icons/tb"

const Details = () => {

  const history = useNavigate();
  const handleRowClick = () => {
    history('/watchVideo');}
  ;
  const[signUp,setSignUp] = useState(false);
  const goToSignUp = () => { 
    setSignUp(true)
}
  /*if (setSignUp) {
    return <SignUpForm />;
  } */



  return (
    <div className="text">
      <Container>
        <h1 className={styles.text1}>We care</h1>
        <h2 className={styles.text2}> about your health</h2>
        <CircularImage></CircularImage>
        <p className={styles.text3}>
          Good health is the state of mental, physical and social well being{" "}
        </p>
        <p className={styles.text4}>
          and it does not just mean absence of diseases.
        </p>
        <Button className={styles.appointment}>
          {" "}
          Book an appointment
          <i>  <BsFillArrowRightCircleFill/> </i>
          {" "}
        </Button>
        <button className={styles.videoBtn} onClick={handleRowClick}>
          <i className={`${styles.playBtn}`}> <TbPlayerPlay/></i>
        </button>{" "}
        watch video
        <p className={styles.member}>
          Become a member of our hosptial community?
        
          <NavLink onClick={goToSignUp} className={styles.reg}>
         
            Sign up
          </NavLink>
 
        </p>
      </Container>
      <SearchCard />
    </div>
  );
};

export default Details;
