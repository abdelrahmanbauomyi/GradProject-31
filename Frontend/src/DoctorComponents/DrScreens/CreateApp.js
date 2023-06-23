import React , {useState} from 'react'
import styles from './CreateApp.module.css'
import { useFormik } from "formik";
import * as yup from "yup";
import dayjs from 'dayjs';
import DatePicker from "react-datepicker";
import { Calendar } from 'react-calendar';
import DrSideBar from '../DrSideBar/DrSideBar';
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';



function CreateApp() {
  const [AppDate, setAppDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [duration, setDuration] = useState(0);
  const [showMessage, setShowMessage] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentData = {
      startTime: dayjs(AppDate).format('YYYY-MM-DD') + ' ' + dayjs(startTime).format('HH:mm:ss'),
      endTime: dayjs(AppDate).format('YYYY-MM-DD') + ' ' + dayjs(endTime).format('HH:mm:ss'),
      duration: duration
    };
    console.log("Your Sumbitted data is", appointmentData); 
    setShowMessage(true);    
  };
  
  const handleAppDateChange = (date) => {
    setAppDate(date);
  };


const tileDisabled = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to 00:00:00 for comparison
    return date < today;
  };


  const tileClassName = ({ date }) => {
    return ''; // Return empty string to remove custom styling
  };

  return (
    <div> 
        <DrSideBar></DrSideBar>
    <div className={styles.Container}>
    <h2>Choose your free appointments slots!</h2>
    <form onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label className={styles.Label}>Date:</label>
        <Calendar
            value={AppDate}
            onChange={handleAppDateChange}
            className={styles.Calendar}
            // minDate={new Date("2000-01-01")}
            // maxDate={new Date("2100-12-31")}
            tileDisabled={tileDisabled}
            tileClassName={tileClassName}
            calendarType="Arabic"
          />
      </div>
      <div className={styles.row}>
        <label className={styles.Label}>Start Time:</label>
        <DatePicker selected={startTime} 
        onChange={time => setStartTime(time)} 
        showTimeSelect 
        showTimeSelectOnly 
        timeIntervals={15} 
        timeCaption="Time" 
        dateFormat="HH:mm" />
      </div>
      <div className={styles.row}>
        <label className={styles.Label}>End Time:</label>
        <DatePicker selected={endTime} 
        onChange={time => setEndTime(time)} 
        showTimeSelect showTimeSelectOnly timeIntervals={15} 
        timeCaption="Time" 
        dateFormat="HH:mm" />
      </div>
      <div className={styles.row}>
        <label className={styles.Label}>Duration (in minutes):</label>
        <input type="number" value={duration} onChange={e => setDuration(e.target.value)} />
      </div>
      <button type="submit" className={styles.button}>Submit</button>
      {showMessage ? (
            <p className={styles[`success-message`]}>
              Your appointment has been posted successfully 
            </p>
          ) : null}

    </form>
    </div>
  
    
  </div>
  )
}

export default CreateApp