import styles from './DashBoard.module.css'
import DrSideBar from '../DrSideBar/DrSideBar'
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {approveAppointment,refuseAppointment} from '../../actions/appointmentActions'
import headersConfig from '../../utils/headersConfig';
import axios from 'axios';

const DashBoard = () => {

  const [appointments, setAppointments] = useState([]);
  const config = headersConfig("booking/doctorhistory");

  useEffect(() => {
    axios.get('http://localhost:8000/booking/doctorhistory',config)
      .then(response => {
       setAppointments(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(appointments)



//   const [showAll, setShowAll] = useState(false);

//   const toggleShowAll = () => {
//     setShowAll(!showAll)
//   }
// ''
//   const disaptch = useDispatch()
  
  
//   const appointments = useSelector((state) => state.appointments.appointments);
 
 

//   const handleApprove = (index) => {
//     disaptch(approveAppointment(index));
//   };

//   const handleRefuse = (index) => {
//     disaptch(refuseAppointment(index));
//   };

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
          
    <div className={styles.tablewrapper}>
      <table className={styles.table}>
      <h2 className={styles.uptxt}>Appointments</h2>
        <thead>
          <tr>
            <th>Appointment id</th>
            <th >start time</th>
            <th>end Time</th>
            <th>status</th>
            <th>Patient Name</th>
          </tr>
        </thead>
        <tbody>
          {displayedAppointments.map(appointment => (
            
            <tr key={appointment.appointmentId}>
              <td>{appointment.appointmentId}</td>
              <td>{appointment.startTime}</td>
              <td>{appointment.endTime}</td>
              <td>{appointment.status}</td>
              <td>{appointment.User ? appointment.User.firstName : ''}</td>
            </tr>
          ))}

         
        </tbody>
        {showMoreButton && !showAllRows && (
        <a className={styles.seeMoreButton} onClick={handleSeeMore}>
          See More
        </a>
      )}
      
      </table>
   </div>
        <DrSideBar/>
    
</div>
        )

    }

export default DashBoard










/*

 <div >
     
      <table className={`${styles.box} `}>
        <thead>
          <td><h3>Appointment requset</h3></td>
        <tr >
            <th>Name</th>
            <th>Disease</th>
            <th>Date</th>
            <th>Approved</th>
          </tr>
        </thead>
        <tbody>
        { appointments && appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.name}</td>
                <td>{appointment.disease}</td>
                <td>{appointment.date}</td>
                {appointment.approved === true ? "Approved" : appointment.approved === false ? "Refused" : "Pending"}
                <td>
                  {!appointment.approved && (
                    <>
                      <button onClick={() => handleApprove(index)}>
                        Approve
                      </button>
                      <button onClick={() => handleRefuse(index)}>
                        Refuse
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!showAll && (
          <div className={styles.buttonContainer}>
            <button onClick={toggleShowAll}>See more</button>
          </div>
        )}
      </div>



*/