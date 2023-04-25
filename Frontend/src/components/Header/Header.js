import React from 'react'
import { Nav,Navbar,Container,NavDropdown,Button, NavLink } from 'react-bootstrap'
import styles from './Header.module.css'
import { useState } from 'react'
import SignInForm from '../NavigationBar/Navbar/SignInForm'
import SignUpForm from '../NavigationBar/Navbar/SignUpForm'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { logout } from '../../actions/userActions'



const Header = () => {


const [doctorSignUpClicked, setDoctorSignUpClicked] = useState(false);  
const dispatch = useDispatch()
const userLogin = useSelector(state=>state.userLogin)
const {userInfo} = userLogin

const logoutHandler = () => {
  dispatch(logout())
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
            <NavDropdown title="services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#link'>Doctors</Nav.Link>
            <Nav.Link as={Link} to='/Health tips'>Health Tips</Nav.Link>
            <Nav.Link as={Link} to='/Contact Us'> Contact us </Nav.Link>
            <NavLink  as={Link} to='/Home Page' >Clinic For Doctors</NavLink>
            
          </Nav>
          <Nav  className='ms-auto'>
          {userInfo?(
              <NavDropdown title={userInfo.name} id='username'>
                <Nav.Link as={Link} to='/profile_info'>
                  Profile
                </Nav.Link>
                <NavDropdown.Item onClick={logoutHandler} >Log out</NavDropdown.Item>
              </NavDropdown>
              
            ):( <div > <Button  onClick={showSignInHandler}  className={styles.SignIn} >Sign in</Button> 
            <Button  onClick={showSignUpHandler}  className={styles.SignUp}>Sign Up</Button>
            {signUpIsClicked && <SignUpForm onClose={hideSignUpHandler} onSwitch={onFormSwitch} />}
            {signInIsClicked && <SignInForm onClose={hideSignInHandler} onSwitch={onFormSwitch}/>}
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

