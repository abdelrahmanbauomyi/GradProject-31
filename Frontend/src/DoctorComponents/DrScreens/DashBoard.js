import styles from './DashBoard.module.css'
import DrSideBar from '../DrSideBar/DrSideBar'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {approveAppointment,refuseAppointment} from '../../actions/appointmentActions'

const DashBoard = () => {

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  const disaptch = useDispatch()
  
  
  const appointments = useSelector((state) => state.appointments.appointments);
 
 

  const handleApprove = (index) => {
    disaptch(approveAppointment(index));
  };

  const handleRefuse = (index) => {
    disaptch(refuseAppointment(index));
  };


    
      return (
        <>
        <DrSideBar/>
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
</>
        )

    }

export default DashBoard










/*

  <Container fluid="sm">
    

    <Row  sm>
      <Col sm>name</Col>
      <Col>disease</Col>
       <Col>date</Col>
        <Col>approval</Col>
    </Row>
    {appointments.map((appointment, index) => (
    <Row sm>
      <Col sm>{appointment.name}</Col>
      <Col sm>{appointment.disease}</Col>
       <Col md>{appointment.date}</Col>
        <Col md> {appointment.approval}</Col>
      
    </Row>     
    ))}

<Row md={4}>
        <Col>1 of 3</Col>
        <Col xs={2}>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
  </Container>



*/