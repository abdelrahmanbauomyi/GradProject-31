import React from 'react'
import SideBar from "../components/SideBar/SideBar"
import Footer from '../components/Footer/Footer'
import styles from './MyAppointments.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function MyAppointments() {

  const appointments = [{
    name: 'John Doe',
    disease: 'Cancer',
    date: '2023-04-27',
    approval: false
  }, {
    name: 'Abdelrahman Lotfy',
    disease: 'Some disease',
    date: '2023-05-27',
    approval: true
  }];


  return (
 <div className={styles.tablecontainer}>
  <table>
    <thead>
    Appointment request
    <tr >
        <th>Name</th>
        <th>Disease</th>
        <th>Date</th>
        <th>Approval</th>
      </tr>
    </thead>
    <tbody>
    {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.name}</td>
              <td>{appointment.disease}</td>
              <td>{appointment.date}</td>
              <td>{appointment.approval ? 'Yes' : 'No'}
              <i className="fa-solid fa-check" />
              <i className="fa-solid fa-xmark" />
              </td>
      </tr>
        ))}
    </tbody>
  </table>
</div>
    )
}

export default MyAppointments