import React, { useState } from "react";
import Modal from "../NavigationBar/Navbar/Modal";
import { Button, Container } from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import headersConfig from "../../utils/headersConfig";
import { createTheme } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const AppointmentModal = ({ onClose, doctor }) => {
  const [age, setAge] = useState("");
  const { userInfo } = useSelector((state) => state.userLogin);
  console.log(doctor);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const bookingSubmitHandler = async (event) => {
    const config = headersConfig();
    event.preventDefault();
    await axios.post("PUT URL HERE", {
      datatoBeSent: {
        appointmentId: "id",
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
          <p>Doctor: 3askary</p>
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
                value={age}
                onChange={handleChange}
                label="Booking time"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>
                  Tensgdfgfdgfdgdfsgdfsgdfsgfdgfdgdfgds
                </MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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


