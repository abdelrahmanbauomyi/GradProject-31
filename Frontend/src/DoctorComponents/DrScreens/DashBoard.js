import styles from "./DashBoard.module.css";
import DrSideBar from "../DrSideBar/DrSideBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  approveAppointment,
  refuseAppointment,
} from "../../actions/appointmentActions";
import headersConfig from "../../utils/headersConfig";
import { setRoomId } from "../../chats/data";
import axios from "axios";
import timeFormatter from "../../utils/timeFormatter";
import Button from "react-bootstrap/Button";

const DashBoard = () => {
  const doctorLogin = useSelector((state) => state.doctorLogin);
  const { doctorInfo } = doctorLogin;

  const [appointments, setAppointments] = useState([]);
  const config = headersConfig("booking/doctorhistory");

  useEffect(() => {
    axios
      .get("http://localhost:8000/booking/doctorhistory", config)
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [visibleRows, setVisibleRows] = useState(3);
  const [showAllRows, setShowAllRows] = useState(false);

  const history = useNavigate();
  const handleRowClick = (appointment) => {
    if (appointment.status == "ongoing") {
      const roomId = appointment.roomId;
      setRoomId(roomId);
      history("/VideoMeeting", { state: { roomId: roomId } });
    }
  };
  const [seeLess, setSeeLess] = useState(false);
  const handleSeeMore = () => {
    setVisibleRows(appointments.length);
    setShowAllRows(true);
    setSeeLess(true);
  };

  const displayedAppointments = showAllRows
    ? appointments
    : appointments.slice(0, visibleRows);
  const showMoreButton = visibleRows < appointments.length;

  return (
    <div>
      {doctorInfo ? (
        <div>
          <div className={styles.tablewrapper}>
            <table className={styles.table}>
              <h2 className={styles.uptxt}>Appointments</h2>
              <thead>
                <tr>
                  <th></th>
                  <th>start time</th>
                  <th>end Time</th>
                  <th>status</th>
                  <th>Patient Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {displayedAppointments.map((appointment, idx) => (
                  <tr key={appointment.appointmentId}>
                    <td>{idx + 1}</td>
                    <td>{timeFormatter(appointment.startTime)}</td>
                    <td>{timeFormatter(appointment.endTime)}</td>
                    <td>{appointment.status}</td>
                    <td>
                      {appointment.User ? appointment.User.firstName : ""}
                    </td>
                    <td>
                      <Button
                        variant={
                          appointment.status === "ongoing" ? "primary" : "info"
                        }
                        disabled={appointment.status !== "ongoing"}
                        onClick={() => handleRowClick(appointment)}>
                        Join
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {showMoreButton && !showAllRows && (
                <a className={styles.seeMoreButton} onClick={handleSeeMore}>
                  See More
                </a>
              )}
              {seeLess && (
                <a
                  className={styles.seeMoreButton}
                  onClick={() => {
                    setVisibleRows(3);
                    setShowAllRows(false);
                    setSeeLess(false);
                  }}>
                  See Less
                </a>
              )}
            </table>
          </div>
          <DrSideBar />
        </div>
      ) : (
        <div> ssssssss </div>
      )}
    </div>
  );
};

export default DashBoard;

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
