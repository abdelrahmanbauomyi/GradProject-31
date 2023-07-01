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
import DoctorSignInForm from '../NavigationBar/Navbar/DoctorSignInForm'
import DoctorSignUpForm from '../NavigationBar/Navbar/DoctorSignUpForm'

const Header = () => { 
// const [doctorSignUpClicked, setDoctorSignUpClicked] = useState(false);  
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

  const [drsignUpIsClicked, setDrsignUpIsClicked] = useState(false);
  const [drsignInIsClicked, setDrsignInIsClicked] = useState(false);


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Normal User
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

  // Doctor
  const showDrSignUp= ()=>{
    setDrsignUpIsClicked(true);
    setDropdownOpen(false); 
  }
  const hideDrSignUp= ()=>{
    setDrsignUpIsClicked(false);
  }
  const showDrSignIn= ()=>{
    setDrsignInIsClicked(true);
    setDropdownOpen(false); 
  }
  const hideDrSignIn= ()=>{
    setDrsignInIsClicked(false);
  }
  function onDrFormSwitch(formType)  {
    if (formType === 'signin') {
      //  hideSignUpHandler();
      //  showSignInHandler();
      hideDrSignUp();
      showDrSignIn();
    } else if (formType === 'signup') {
      //  hideSignInHandler();
      //  showSignUpHandler();
      hideDrSignIn();
      showDrSignUp();
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
            <Nav.Link as={Link} to='/skeleton'>Interactive dignosis</Nav.Link>
              <Nav.Link as={Link} to='/Contact Us'> Contact us </Nav.Link>
              <Nav.Link as={Link} to='/ask'> Ask a question </Nav.Link>

          </Nav>
          <Nav  className='ms-auto'>
          {userInfo  ?
           (<div>
              <NavDropdown title={userInfo.firstName} id='username'>
                <Nav.Link as={Link} to='/profile_info'>
                  Profile
                </Nav.Link>
                <Nav.Link  onClick={logoutHandler}>
                  Log out
                </Nav.Link>
              </NavDropdown>

              </div>   
            ): doctorInfo ? (
              <div>
                 <NavDropdown title={doctorInfo.Dname} id='username'>
                <Nav.Link as={Link} to='/DrDashBoard'>
                  Profile
                </Nav.Link>
                <NavLink  onClick={logoutHandler}  >Log out</NavLink>
              </NavDropdown>
              </div>
            ): (      
               <div > 
            <Navbar.Collapse id="basic-navbar-nav">
            <NavDropdown title="Clinic For Doctors" onToggle={handleDropdownToggle} show={dropdownOpen} >
            <NavLink  as={Link} to='' className={styles.clinic} onClick={showDrSignUp}  >Sign Up</NavLink>
            <NavLink  as={Link} to='' className={styles.clinic} onClick={showDrSignIn}  >Sign In</NavLink>
            {drsignUpIsClicked &&<DoctorSignUpForm onClose={hideDrSignUp} onSwitch={onDrFormSwitch}/>}
            {drsignInIsClicked && <DoctorSignInForm onClose={hideDrSignIn} onSwitch={onDrFormSwitch}/>}
            </NavDropdown>
            
            <Button  onClick={showSignInHandler}  className={styles.SignIn} >Sign in</Button> 
            <Button  onClick={showSignUpHandler}  className={styles.SignUp}>Sign Up</Button>
            {signUpIsClicked && <SignUpForm onClose={hideSignUpHandler} onSwitch={onFormSwitch} />}
            {signInIsClicked && <SignInForm onClose={hideSignInHandler} onSwitch={onFormSwitch}/>}
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


export default Header

