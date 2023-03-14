import React from 'react'
import styles from './Search.module.css'
import {Button} from 'react-bootstrap'
import { Switch } from '@mui/material';




const SearchCard = () => {
const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div > 
      <label className={styles.pos} >  
      <p className={styles.findDoc}>Find a doctor </p> 
        <input 
        className={styles.nameDoc}
        type="Name a doctor " 
        placeholder='Name a doctor'
        />
        <input
        className={styles.specialtiy}
        type="Speciality"
        placeholder='Speciality'
        />
        <text> Availability 
         <Switch {...label} defaultChecked  color="secondary"  />
        </text>
        <Button className={styles.searchBtn}> Search</Button> 
      </label>
    </div>  
  )
}

export default SearchCard
