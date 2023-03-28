import React from 'react'
import Footer from '../components/Footer/Footer'
import SideBar from "../components/SideBar/SideBar"
import styles from './FavouriteArticles.module.css'
function FavouriteArticles() {
  return (
    <div className='FavouriteArticles'>
    <div >
      <SideBar/>
    </div >
    <div className={styles.pos}>
    </div>
    </div>
  )
}

export default FavouriteArticles