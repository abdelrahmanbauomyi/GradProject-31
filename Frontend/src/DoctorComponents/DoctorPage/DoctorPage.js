import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./DoctorPage.module.css";
import { useEffect } from "react";
import axios from "axios";
import headersConfig from "../../utils/headersConfig";
import DoctorPageCard from "./DoctorPageCard";
import AboutDoctor from "./AboutDoctor";

import PatientsReviews from "./PatientsReviews";
import BookingSection from "./BookingSection";

const DoctorPage = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState();
  const [bookingModal, setBookingModal] = useState(false);
  useEffect(() => {
    const config = headersConfig();
    axios
      .get(`http://localhost:8000/doctors/${doctorId}`, {}, config)
      .then((res) => setDoctor(res.data));
  }, [bookingModal]);

  //if (!doctor) return null;
  return (
    <div>
      <Header />
      <div className={classes.mainContainer}>
        <div className={classes.doctorPage}>
          <div className={classes.limitedWidth}>
            <div className={classes.gridStyleRow}>
              <div className={classes.profile}>
                <DoctorPageCard />
                <AboutDoctor />
                <PatientsReviews />
                <button className={classes.bookButton}>
                Book Now!
              </button>
              </div>
              <BookingSection
                bookingModal={bookingModal}
                setBookingModal={setBookingModal}
                doctor={doctor}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
