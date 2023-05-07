import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { Button } from "react-bootstrap";

import AppointmentModal from "../../components/Appointment/AppointmentModal";
import { useEffect } from "react";
import axios from "axios";
import headersConfig from "../../utils/headersConfig";

const DoctorPage = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState();
  const config = headersConfig();
  const [bookingModal, setBookingModal] = useState(false);
  useEffect(() => {
    axios
      .get(`PUT URL HERE TO FETCH DOCTOR INFO/${doctorId}`, {}, config)
      .then((result) => setDoctor(result.data))
      .then(console.log(doctor));
    //Doctor Data to be displayed in this page
  }, []);

  //if (!doctor) return null;
  return (
    <div>
      <Header />
      {bookingModal && (
        <AppointmentModal
          appointments={doctor.appointments}
          onClose={() => setBookingModal(false)}
        />
      )}
      <Button onClick={() => setBookingModal(true)}>book</Button>
    </div>
  );
};

export default DoctorPage;
