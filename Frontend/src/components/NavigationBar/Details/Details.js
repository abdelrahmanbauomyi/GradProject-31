import React from "react";
import { Container, Button, NavLink } from "react-bootstrap";
import styles from "./Details.module.css";
import CircularImage from "./CircularImage";
import SearchCard from "../Cards/SearchCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignUpForm from "../Navbar/SignUpForm";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { TbPlayerPlay } from "react-icons/tb";
import SignInForm from "../Navbar/SignInForm";
import { useSelector } from "react-redux";

const Details = () => {


  const userLogin = useSelector((state)=>state.userLogin)
  const {userInfo} = userLogin
  const doctorLogin = useSelector((state)=>state.doctorLogin)
  const {doctorInfo} = doctorLogin


  const history = useNavigate();
  const handleRowClick = () => {
    history("/watchVideo");
  };
  const [signUpIsClicked, setsignUpIsClicked] = useState(false);
  const [signInIsClicked, setsignInIsClicked] = useState(false);
  const showSignUpHandler = () => {
    setsignUpIsClicked(true);
  };
  const hideSignUpHandler = () => {
    setsignUpIsClicked(false);
  };

  const showSignInHandler = () => {
    setsignInIsClicked(true);
  };
  const hideSignInHandler = () => {
    setsignInIsClicked(false);
  };
  function onFormSwitch(formType)  {
    if (formType === 'signin') {
       hideSignUpHandler();
       showSignInHandler();
    } else if (formType === 'signup') {
       hideSignInHandler();
       showSignUpHandler();
    }
  };

  const handleClick = () => {
    alert("Button clicked!");
  };

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
        <Button
          className={styles.appointment}
          onClick={() => {
            history("/search");
          }}
        >
          {" "}
          Book an appointment
          <i>
            {" "}
            <BsFillArrowRightCircleFill />{" "}
          </i>{" "}
        </Button>
        <button className={styles.videoBtn} onClick={handleRowClick}>
          <i className={`${styles.playBtn}`}>
            {" "}
            <TbPlayerPlay />
          </i>
        </button>{" "}
        watch video
          {userInfo ? (
           <div></div>
          ) : doctorInfo? (
          <div> </div>
          ) : ( 
          <p className={styles.member}>
          <NavLink onClick={showSignUpHandler} className={styles.reg}>Sign up</NavLink>
          Become a member of our hosptial community?
          </p>
           )
          }
        {signUpIsClicked && <SignUpForm onClose={hideSignUpHandler} onSwitch={onFormSwitch} />}
        {signInIsClicked && <SignInForm onClose={hideSignInHandler} onSwitch={onFormSwitch}/>}
      </Container>
    </div>
  );
};

export default Details;
