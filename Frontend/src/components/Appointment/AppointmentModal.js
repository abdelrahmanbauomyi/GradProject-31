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

const AppointmentModal = ({ onClose }) => {
  const doctor = {
    Dname: "Lotfy Mabrouk",
    email: "maskedrider99xx@gmail.com",
    dob: "1999-12-04T00:00:00.000Z",
    gender: "Male",
    mobilenumber: "11536520723",
    confirmed: false,
    rating: 0,
    speciality: "Cardiothoracic",
    sub_specialties: null,
    title: "Dr",
    area: null,
    location: null,
    fees: 200,
    imgPath: "imgsdoctor.png",
    createdAt: "2023-05-07T21:01:12.562Z",
    updatedAt: "2023-05-07T21:02:07.449Z",
    Bookings: [
      {
        id: 1,
        startTime: "2016-01-22T19:00:00.000Z",
        endTime: "2016-01-22T19:30:00.000Z",
        status: "pending",
      },
      {
        id: 2,
        startTime: "2016-01-22T19:30:00.000Z",
        endTime: "2016-01-22T20:00:00.000Z",
        status: "pending",
      },
      {
        id: 3,
        startTime: "2016-01-22T20:00:00.000Z",
        endTime: "2016-01-22T20:30:00.000Z",
        status: "pending",
      },
      {
        id: 4,
        startTime: "2016-01-22T20:30:00.000Z",
        endTime: "2016-01-22T21:00:00.000Z",
        status: "pending",
      },
    ],
  };
  const [bookings, setBookings] = useState([]);
  const [bookingId, setBookingId] = useState("");
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    setBookings(doctor.Bookings);
  }, []);

  const handleChange = (event) => {
    setBookingId(event.target.value);
  };

  const bookingSubmitHandler = async (event) => {
    event.preventDefault();
    const config = headersConfig("/PUT URL HERE");
    await axios.post("PUT URL HERE", {
      bookingId,

      config,
    });
    //console.log(bookingId);
  };
  //if (!userInfo) return <Modal onClose={onClose}>Please sign in</Modal>;
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
                {bookings
                  .filter((booking) => booking.status === "pending")
                  .map((booking, idx) => (
                    <MenuItem key={idx} value={booking.id}>
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
