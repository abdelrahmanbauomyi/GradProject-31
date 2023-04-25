import React from "react";
import { Container, Button, NavLink } from "react-bootstrap";
import styles from "./Details.module.css";
import CircularImage from "./CircularImage";
import SearchCard from "../Cards/SearchCard";
import Header from "../../Header/Header"

const Details = () => {
  return (
    <div className='text'>
      <Header/>
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
          <i className="fas fa-arrow-right"></i>{" "}
        </Button>
        <button className={styles.videoBtn}>
          <i className={`fa-solid fa-play ${styles.playBtn}`}></i>
        </button>{" "}
        watch video
        <p className={styles.member}>
          Become a member of out hosptial community?
          <NavLink href="#link" className={styles.reg}>
            Sign up
          </NavLink>
        </p>
      </Container>
      <SearchCard/>
    </div>
  );
};

export default Details;
