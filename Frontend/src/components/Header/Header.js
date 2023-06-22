import React from 'react'
import { Nav,Navbar,Container,NavDropdown,Button, NavLink } from 'react-bootstrap'
import styles from './Header.module.css'
import { useState } from 'react'
import SignInForm from '../NavigationBar/Navbar/SignInForm'
import SignUpForm from '../NavigationBar/Navbar/SignUpForm'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { logout } from '../../actions/userActions'
import { doctorLogout } from '../../actions/doctorActions'

const Header = () => { 
const [doctorSignUpClicked, setDoctorSignUpClicked] = useState(false);  
const dispatch = useDispatch()
const userLogin = useSelector(state=>state.userLogin)
const {userInfo} = userLogin
const doctorLogin = useSelector(state=>state.doctorLogin)
const {doctorInfo} = doctorLogin
 const logoutHandler = () => {
  dispatch(logout())
  dispatch(doctorLogout())
} 
   
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

/*
  const handleDoctorModalShow=()=>{
    setDoctorSignUpClicked(true);
  }
  const handleDoctorModalClose=()=>{
    setDoctorSignUpClicked(false);
  }

  <Navbar.Text className={styles.text} onClick={handleDoctorModalShow}>Clinic For Doctors</Navbar.Text>
  {doctorSignUpClicked && <DoctorSignUpForm onClose={handleDoctorModalClose}/>}

*/ 

  return (
    <header  >
       <Navbar className={styles.navbar} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/' className={styles.Brand}>Clinc Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/'  className={styles.Home}>Home</Nav.Link>
            <Nav.Link as={Link} to='/Health tips'>Health Tips</Nav.Link>
              <Nav.Link as={Link} to='/Contact Us'> Contact us </Nav.Link>
          </Nav>
          <Nav  className='ms-auto'>
          {userInfo?
           (<div>
              <NavDropdown title={userInfo.firstName} id='username'>
                <Nav.Link as={Link} to='/profile_info'>
                  Profile
                </Nav.Link>
                <NavDropdown.Item  onClick={logoutHandler}  >Log out</NavDropdown.Item>
              </NavDropdown>
              <Nav className="ms-auto">


              </Nav>
              </div>   
            ): doctorInfo ? (
              <div>
                 <NavDropdown title={doctorInfo.Dname} id='username'>
                <Nav.Link as={Link} to='/profile_info'>
                  Profile
                </Nav.Link>
                <NavDropdown.Item  onClick={logoutHandler}  >Log out</NavDropdown.Item>
              </NavDropdown>
              </div>
            ): (
               <div > 
                 <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
             <NavLink  as={Link} to='/HomePage' >Clinic For Doctors</NavLink>
            <Button  onClick={showSignInHandler}  className={styles.SignIn} >Sign in</Button> 
            <Button  onClick={showSignUpHandler}  className={styles.SignUp}>Sign Up</Button>
            {signUpIsClicked && <SignUpForm onClose={hideSignUpHandler} onSwitch={onFormSwitch} />}
            {signInIsClicked && <SignInForm onClose={hideSignInHandler} onSwitch={onFormSwitch}/>}
            </Nav>
            </Navbar.Collapse>
            </div>
            )   
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    
  )
}
//onSwitch={onFormSwitch}

export default Header

