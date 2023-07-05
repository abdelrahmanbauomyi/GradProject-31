import React from 'react'
import styles from './Footer.module.css'

const Subscribe = () => {
  return (
    <div>
    <h1 className='d-flex justify-content-center'> Subscribe To Our Newsletter</h1>
    <p className={`${styles.latest} ${'d-flex justify-content-center'}`}>Get latest news of our hospital </p>
      <label className={`${styles.pos}`} >  
      <p className={styles.findDoc}> For Newsletter </p> 
        <input 
        className={styles.nameDoc}
        type="email " 
        placeholder='Enter your email here'
        
        />
        <button className={styles.but}> Subscribe </button>
        </label>
        </div>
  )
}

export default Subscribe
