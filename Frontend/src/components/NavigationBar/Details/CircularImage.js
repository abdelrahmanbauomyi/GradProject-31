import React from 'react'
import styles from './Circular.module.css'

import leo from '../../../assets/leo.png'

import {Card,Button} from 'react-bootstrap'
import {FaSearch } from "react-icons/fa";
import {TbNotes} from "react-icons/tb"
 

const CircularImage = () => {
  return (
  <div className={styles.wrap}>
    <div className={styles.card}>
      <Card.Img variant="top" src={leo} className={styles.img} />
    </div>
    <div className={styles.Circluar}>
      <Button variant="light" className={`${styles.cardApp} ${styles.cardSearch}`}>
      <i > <FaSearch /></i>
      Well Qualified doctors
      <p >Treat with care</p></Button>
      <Button variant="light" className={`${styles.cardQualify} ${styles.cardSearch}`}>
      <i > <TbNotes/></i>
       Book an appointment
      <p >Online appointment</p></Button>
      <Button variant="light" className={`${styles.cardRep} ${styles.cardSearch}`}>
      <i > <TbNotes/></i>
      Book an appointment
      <p >  Online appointment</p></Button>
    </div>
  </div>
  )
}

export default CircularImage
