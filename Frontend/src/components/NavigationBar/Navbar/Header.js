import React from 'react'
import { Nav,Navbar,Container,NavDropdown,Button } from 'react-bootstrap'
import Details from '../Details/Details'
import styles from './Header.module.css'
import SearchCard from '../Cards/SearchCard'
import { useState } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { logout } from '../../../actions/userActions'


const Header = () => {

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
<<<<<<< Updated upstream
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
          
         
=======
          <Button  onClick={showSignInHandler}  className={styles.SignIn} >Sign in</Button>
          <Button  onClick={showSignUpHandler}  className={styles.SignUp}>Sign Up</Button>
          {signUpIsClicked && <SignUpForm onClose={hideSignUpHandler} onSwitch={onFormSwitch}/>}
          {signInIsClicked && <SignInForm onClose={hideSignInHandler} onSwitch={onFormSwitch}/>}
>>>>>>> Stashed changes
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Details></Details>
    <SearchCard></SearchCard>
    </header>
    
  )
}
//onSwitch={onFormSwitch}

export default Header

