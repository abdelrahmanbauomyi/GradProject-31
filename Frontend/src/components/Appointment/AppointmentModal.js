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

const AppointmentModal = ({ onClose, doctor }) => {
  const [bookings, setBookings] = useState([]);
  const [bookingId, setBookingId] = useState(null);
  const { userInfo } = useSelector((state) => state.userLogin);
  const  [bookingTime , setBookingTime] = useState(" ")
  useEffect(() => {
    setBookings(doctor.Bookings);
  }, []);

  const handleChange = (event) => {
    setBookingTime(event.target.value);
    console.log(bookingTime);
  };
  
  const bookingSubmitHandler = async (event) => {
    const config = headersConfig('/PUT URL HERE');
    event.preventDefault();
    await axios.post("PUT URL HERE", {
      datatoBeSent: {
        bookingId: "id",
      },
      config,
    });
  };
  if (!userInfo) return <Modal onClose={onClose}>Please sign in</Modal>;
  return (
    <Modal onClose={onClose}>
      <Container>
        <form onSubmit={bookingSubmitHandler}>
          <h5>Booking Confirmation</h5>
          <p>Doctor: {doctor.Dname}</p>
          <div className="mb-4">
            <FormControl required variant="standard" sx={{ m: 1, width: 200 }}>
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  gap: "3px",
                  marginLeft: "-15px",
                }}
              >
                Day
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={bookingTime?bookingTime : " "}
                onChange={handleChange}
                label="Booking time"
              >
                {bookings.map((booking) => 
                  <MenuItem value={booking.appoitmentId}>
                    {booking.startTime}
                  </MenuItem>
                )}
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
