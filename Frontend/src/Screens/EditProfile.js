import React from 'react'
import SideBar from "../components/SideBar/SideBar" 
import Footer from '../components/Footer/Footer'
import styles from './EditProfile.module.css'
function EditProfile() {
  return (
    <div>
    <div className='Edit-Profile'>
      <SideBar/>
    </div >
    <div className={styles.pos}>
    </div>
    </div>
  )
}

export default EditProfile