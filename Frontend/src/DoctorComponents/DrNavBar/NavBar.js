import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import DoctorSignInForm from '../../components/NavigationBar/Navbar/DoctorSignInForm'
import DoctorSignUpForm from '../../components/NavigationBar/Navbar/DoctorSignUpForm'
import { useDispatch, useSelector } from "react-redux";
import { Nav,Navbar,Container, NavDropdown } from 'react-bootstrap'
import { doctorLogout } from '../../actions/doctorActions'

const NavBar = () => {

 
const dispatch = useDispatch()
const doctorLogin = useSelector(state=>state.doctorLogin)
const {doctorInfo} = doctorLogin

       
const [doctorSignInClicked, setDoctorSignInClicked] = useState(false)
const [doctorSignUpClicked, setDoctorSignUpClicked] = useState(false); 

    const handleDoctorModalSignInShow=()=>{
        setDoctorSignInClicked(true);
      }
    const handleDoctorModalSignInClose=()=>{
          setDoctorSignInClicked(false);
      }
    const handleDoctorModalShow=()=>{
        setDoctorSignUpClicked(true);
      }
      const handleDoctorModalClose=()=>{
        setDoctorSignUpClicked(false);
      }

      const logoutHandler = () => {
        dispatch(doctorLogout())
      }

    return (
        <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand  as={Link} to='/'>Clinic Logo </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
             
              <Nav  className='ms-auto'>
          {doctorInfo?(
              <NavDropdown title={doctorInfo.name} id='username'>
                <Nav.Link as={Link} to='/SideScreen'>
                  Profile
                </Nav.Link>
                <NavDropdown.Item  onClick={logoutHandler}  >Log out</NavDropdown.Item>
              </NavDropdown>
              
            ):( <div> 
                <Nav className="me-auto">
                <Navbar.Text className={styles.text} onClick={handleDoctorModalSignInShow}>Sign In</Navbar.Text>
                {doctorSignInClicked && <DoctorSignInForm onClose={handleDoctorModalSignInClose}/>}
                <Navbar.Text className={styles.text} onClick={handleDoctorModalShow}>Sign Up</Navbar.Text>
                {doctorSignUpClicked && <DoctorSignUpForm onClose={handleDoctorModalClose}/>}
                
              </Nav>
            </div>
            )   
            }
          </Nav>





            </Navbar.Collapse>
          </Container>
        </Navbar>
        </header>
      );
    }

export default NavBar
