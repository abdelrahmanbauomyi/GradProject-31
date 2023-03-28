import React from 'react'
import SideBar from "../components/SideBar/SideBar"
import Footer from '../components/Footer/Footer'
import styles from './MyAppointments.module.css'
function MyAppointments() {
  return (
    <div className='MyAppointments'>
    <div >
      <SideBar/>
    </div >
    <div className={styles.pos}>
    <Footer/>
    </div>
    </div>
  )
}

export default MyAppointments