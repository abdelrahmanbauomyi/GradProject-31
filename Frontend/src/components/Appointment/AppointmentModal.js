import React, { useEffect, useState } from "react";
import Modal from "../NavigationBar/Navbar/Modal";
import { Button, Container } from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import headersConfig from "../../utils/headersConfig";
import { useSelector } from "react-redux";
import timeFormatter from "../../utils/timeFormatter";

const AppointmentModal = ({ onClose, doctor, setBookingModal }) => {
  const [bookings, setBookings] = useState([]);
  const [bookingId, setBookingId] = useState("");
  const [successfulAppointmentModal, setSuccessfulAppointmentModal] =
    useState(false);
  const { userInfo } = useSelector((state) => state.userLogin);
  useEffect(() => {
    setBookings(
      doctor.Bookings.filter((booking) => booking.status === "pending")
    );
  }, [doctor.Bookings]);
  const handleChange = (event) => {
    setBookingId(event.target.value);
  };

  const bookingSubmitHandler = async (event) => {
    event.preventDefault();
    const config = headersConfig("booking/reserveappointment");
    const response = await axios.post(
      "http://localhost:8000/booking/reserveappointment",
      {
        appointmentId: bookingId,
      },
      config
    );
    if (response.request.status === 200) {
      setSuccessfulAppointmentModal(true);
      setTimeout(() => {
        setSuccessfulAppointmentModal(false);
        setBookingModal(false);
      }, 2000);
    }
  };
  if (!userInfo) return <Modal onClose={onClose}>Please sign in</Modal>;
  if (successfulAppointmentModal)
    return (
      <Modal onClose={() => setSuccessfulAppointmentModal(false)}>
        Your Appointment has been submitted.
      </Modal>
    );
  return (
    <Modal onClose={onClose}>
      <Container>
        <form onSubmit={bookingSubmitHandler} style={{ textAlign: "center" }}>
          <h5>Booking Confirmation</h5>
          <h6>Doctor: {doctor.Dname}</h6>
          <div className="mb-4">
            <FormControl required variant="standard" sx={{ m: 1, width: 250 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Day
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={bookingId}
                onChange={handleChange}
                label="Booking time"
                sx={{
                  color: "black",
                }}
              >
                {bookings.length === 0 && <p>No Available appointments</p>}
                {bookings.length !== 0 &&
                  bookings.map((booking, idx) => (
                    <MenuItem key={idx} value={booking.appointmentId}>
                      {timeFormatter(booking.startTime)}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>
          <div className="d-flex justify-content-center">
            <Button type="submit">Book</Button>
          </div>
        </form>
      </Container>
    </Modal>
  );
};

export default AppointmentModal;
