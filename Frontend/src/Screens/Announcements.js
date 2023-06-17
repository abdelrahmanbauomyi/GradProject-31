import React from 'react';
import styles from './Announcements.module.css';
import {  useNavigate } from "react-router-dom";
import SideBar from '../components/SideBar/SideBar';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';

function Announcements(props) {
  const announcements = [
    {
      announcement: 'Meeting has been rescheduled for',
      status: 'Scheduled',
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },
    {
      announcement: 'Meeting has been rescheduled for',
      status: 'Scheduled',
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },  {
      announcement: 'Meeting has been rescheduled for',
      status: 'Scheduled',
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },  {
      announcement: 'Meeting has been rescheduled for',
      status: 'Scheduled',
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },  {
      announcement: 'Meeting has been rescheduled for',
      status: 'Scheduled',
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },
    // Add more announcement objects with the status property
  ];


  const appointments = [
    {
      id: 111,
      startTime: '9:00 AM',
      doctorName: 'Dr. John Doe',
      speciality: 'Cardiology',
      status: 'Scheduled',
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },
    {
      id: 222,
      startTime: '10:30 AM',
      doctorName: 'Dr. Jane Smith',
      speciality: 'Dermatology',
      status: 'Completed',
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },
    
    {
      id: 333,
      startTime: '9:30 AM',
      doctorName: 'Dr. Joe',
      speciality: 'Cardiology',
      status: 'Scheduled',
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },
    {
      id: 333,
      startTime: '9:30 AM',
      doctorName: 'Dr. Joe',
      speciality: 'Cardiology',
      status: 'ready',
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },
    {
      id: 3,
      startTime: '9:30 AM',
      doctorName: 'Dr. Joe',
      speciality: 'Cardiology',
      status: 'Scheduled',
      profilePictureUrl: 'https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM='
    },
    // Add more appointment objects
  ];

  const history = useNavigate();
  const handleRowClick = (appointment) => {
    if (appointment.status == "ready" ) {
    history('/VideoMeeting');}
  };


  const [visibleRows, setVisibleRows] = useState(3);
  const [showAllRows, setShowAllRows] = useState(false);

  const handleSeeMore = () => {
    setVisibleRows(appointments.length);
    setShowAllRows(true);
  };

  const displayedAppointments = showAllRows ? appointments : appointments.slice(0, visibleRows);
  const showMoreButton = visibleRows < appointments.length;


  return (
    <div>
    <SideBar/>
    <div className={styles.tablewrapper}>
      <table className={styles.table}>
      <h2 className={styles.uptxt}>Appointments</h2>
        <thead>
          <tr>
            <th></th>
            <th>Appointment id</th>
            <th >start time</th>
            <th>Doctor Name</th>
            <th>Speciality</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {displayedAppointments .map((appointment, idx) => (
              <tr key={idx} onClick={()=> handleRowClick(appointment)} >
                  <div className={styles.profilePicture}>
              <img src={appointment.profilePictureUrl} alt="Profile" />
            </div>
                <td>{appointment.id}</td>
                <td className={styles.expand}>{appointment.startTime} </td> 
                <td className={styles.expand}>{appointment.doctorName}</td> 
                <td className={styles.expand}>{appointment.speciality}</td> 
                <td className={styles.expand}>{appointment.status}</td> 
               
              
              </tr>
          ))}
         
        </tbody>
        {showMoreButton && !showAllRows && (
        <a className={styles.seeMoreButton} onClick={handleSeeMore}>
          See More
        </a>
      )}
      
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
   
    </div>
  );
};

export default Announcements;
