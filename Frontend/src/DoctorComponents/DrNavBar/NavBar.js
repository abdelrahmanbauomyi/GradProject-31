import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import DoctorSignUpForm from '../../components/NavigationBar/Navbar/DoctorSignUpForm'


import { Nav,Navbar,Container } from 'react-bootstrap'
const NavBar = () => {

    const handleDoctorModalShow=()=>{
        setDoctorSignUpClicked(true);
      }
      const handleDoctorModalClose=()=>{
        setDoctorSignUpClicked(false);
      }

    const [doctorSignUpClicked, setDoctorSignUpClicked] = useState(false); 
    return (
        <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand  as={Link} to='/'>Clinic Logo </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/'>Users registration</Nav.Link>
                <Nav.Link href="#link">Sign in</Nav.Link>
                <Navbar.Text className={styles.text} onClick={handleDoctorModalShow}>Sign Up</Navbar.Text>
                {doctorSignUpClicked && <DoctorSignUpForm onClose={handleDoctorModalClose}/>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </header>
      );
    }

export default NavBar
