import React from 'react';
import styles from './Announcements.module.css';
import {  useNavigate } from "react-router-dom";
import DrSideBar from "../DoctorComponents/DrSideBar/DrSideBar"
import Footer from '../components/Footer/Footer';
import { useState,useEffect } from 'react';
import axios from 'axios';
import headersConfig from "../utils/headersConfig";
import { setRoomId } from '../chats/data';
import timeFormatter from '../utils/timeFormatter';

function Announcements(props) {


  const [appointments, setAppointments] = useState([]);
  const config = headersConfig("booking/userhistory");
  
  useEffect(() => {
    axios.get('http://localhost:8000/booking/userhistory', config)
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const announcements = [
    {
      announcement: 'Meeting has been rescheduled for',
      
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },
    {
      announcement: 'Meeting has been rescheduled for',
      
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },  {
      announcement: 'Meeting has been rescheduled for',
      
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },  {
      announcement: 'Meeting has been rescheduled for',
      
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },  {
      announcement: 'Meeting has been rescheduled for',
      
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },
    // Add more announcement objects with the status property
  ];


  
  const history = useNavigate();
  const handleRowClick = (appointment) => {
    if (appointment.status == "ongoing" ) {
      const roomId = appointment.roomId;
      setRoomId(roomId);
    history('/VideoMeeting');}
  };


  const [visibleRows, setVisibleRows] = useState(3);
  const [showAllRows, setShowAllRows] = useState(false);
  const [seeLess, setSeeLess] = useState(false)
  const handleSeeMore = () => {
    setVisibleRows(appointments.length);
    setShowAllRows(true);
    setSeeLess(true)
  };


  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  
  const handleReviewClick = (appointment) => {
    setShowReviewForm(true);
  };
  
  const handleCloseReviewForm = () => {
    setShowReviewForm(false);
  };
  
  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };
  
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  
   const headConfig = headersConfig("review")
  const handleReviewSubmit = (event) => {
    event.preventDefault();
   
    const {response} = axios.patch('http://localhost:8000/review' , {
      "rating": rating,
      "comment": comment
    }
    , headConfig ) 
   console.log(response)

    setRating(0);
    setComment('');
    setShowReviewForm(false);
  };


  
  const displayedAppointments = showAllRows ? appointments : appointments.slice(0, visibleRows);
  const showMoreButton = visibleRows < appointments.length;
  // console.log(appointments)

  
  return (
    
    <div>

    <div className={styles.tablewrapper}>
      <table className={styles.table}>
      <h2 className={styles.uptxt}>Appointments</h2>
        <thead>
          <tr>
            <th></th>
            <th >start time</th>
            <th>end Time</th>
            <th>status</th>
            <th>Doctor Name</th>
            <th>Meeting</th>
            <th>Reviews</th>
          </tr>
        </thead>
        <tbody>
          {displayedAppointments.map((appointment,idx) => (
            
            <tr key={appointment.appointmentId} onClick={()=>handleRowClick(appointment)}>  
              <td>{idx+1}</td>
              <td>{timeFormatter(appointment.startTime)}</td>
              <td>{timeFormatter(appointment.endTime)}</td>
              <td>{appointment.status}</td>
              <td>{appointment.Doctor.Dname}</td>
              <td>
        {/* Button with different styles and disabled state */}
        <button
          style={{
            backgroundColor: appointment.status === "ongoing" ? "green" : "red",
            color: "white",
          }}
          disabled={appointment.status !== "ongoing"}
          onClick={() => handleRowClick(appointment)}
        >
          Join
        </button>
      </td>
      <td>
        {/* Button with different styles and disabled state */}
        <button
          style={{
            backgroundColor: appointment.status === "done" ? "green" : "red",
            color: "white",
          }}
          disabled={appointment.status !== "done"}
          onClick={() => handleReviewClick(appointment)}
        >
          Review
        </button>
      </td>
            </tr>
          ))}
        </tbody>
        {showReviewForm && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={handleCloseReviewForm}>
        &times;
      </span>
      <form onSubmit={handleReviewSubmit}>
        <h2>Leave a Review</h2>
        <div>
          <label>Rating:</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? 'filled' : ''}`}
                onClick={() => handleRatingChange(star)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
        <div>
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment here..."
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
)}
        {showMoreButton && !showAllRows && (
        <a className={styles.seeMoreButton} onClick={handleSeeMore}>
          See More
        </a>
        
      )}
      {seeLess && <a className={styles.seeMoreButton} onClick={()=>{
setVisibleRows(3)
setShowAllRows(false)
setSeeLess(false)
}}>See Less</a>}
        
      </table>
   
      
      <div className={styles.announcementsContainer}>
      <h2 className={styles.uptxt}>Announcements</h2>
      <div className={styles.announcementList}>
        {announcements.map((announcement, index) => (
          <div key={index} className={styles.announcementRow}>
            <div className={styles.profilePicture}>
              <img src={announcement.profilePictureUrl} alt="Profile" />
            </div>
            <div className={styles.announcementContent}>
              <div>
                <span className={styles.announcement}>{announcement.announcement}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <span className={styles.seeMoreText}>See More</span>
    </div>
    </div>
    <DrSideBar/>
    </div>
  );
};

export default Announcements;
