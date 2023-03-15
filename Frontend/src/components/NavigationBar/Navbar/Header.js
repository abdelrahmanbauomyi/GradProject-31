import React from 'react'
import { Nav,Navbar,Container,NavDropdown,Button } from 'react-bootstrap'
import Details from '../Details/Details'
import styles from './Header.module.css'
import SearchCard from '../Cards/SearchCard'
import { useState } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'


const Header = () => {

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

   const onFormSwitch = (formType) => {
    if (formType === 'signin') {
      hideSignUpHandler();
      showSignInHandler();
    } else if (formType === 'signup') {
      hideSignInHandler();
      showSignUpHandler();
    }
  };



  return (
    
    <header  >
       <Navbar className={styles.navbar} expand="lg">
      <Container>
        <Navbar.Brand href="#home" className={styles.Brand}>Clinc Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"  className={styles.Home}>Home</Nav.Link>
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
            <Nav.Link href="#link">Doctors</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Contact us </Nav.Link>
          </Nav>
          <Nav  className='ms-auto'>
          <Button  onClick={showSignInHandler}  className={styles.SignIn} >Sign in</Button>
          <Button  onClick={showSignUpHandler}  className={styles.SignUp}>Sign Up</Button>
          {signUpIsClicked && <SignUpForm onClose={hideSignUpHandler} onSwitch={onFormSwitch} />}
          {signInIsClicked && <SignInForm onClose={hideSignInHandler} onSwitch={onFormSwitch}/>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Details></Details>
    <SearchCard></SearchCard>
    </header>
    
  )
}

export default Header

