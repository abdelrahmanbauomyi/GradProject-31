import React, { useState } from "react";
import classes from "./BookingSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Scheduler from "../../components/UI/Scheduler";
import AppointmentModal from "../../components/Appointment/AppointmentModal";

const BookingSection = ({ doctor, bookingModal, setBookingModal }) => {
  return (
    <div className={classes.bookingSection}>
      <div className={classes.bookingContainer}>
        <div className={classes.bookingTitle}>Booking Information</div>

        <div className={classes.bookingDetails}>
          <div className={classes.firstElement}>
            <span>
              <FontAwesomeIcon
                icon={faMoneyBill}
                className={classes.imgColor1}
              />
            </span>
            <span className={classes.firstElementText}>fees 300 EGP</span>
          </div>
          <div className={classes.firstElement}>
            <span>
              <FontAwesomeIcon icon={faClock} className={classes.imgColor1} />
            </span>
            <span className={classes.firstElementText}>
              Waiting Time: 1 Hour and 30 Minutes
            </span>
          </div>
        </div>
        <span className={classes.one}>
          <span className={classes.two}>
            <div className={classes.locationContainer}>
              <div className={classes.location}>
                <span className={classes.locationIcon}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className={classes.imgColor1}
                  />
                </span>
                <div className={classes.locationText}>
                  <span className={classes.address}>
                    El 3asher : El 3asher Street
                  </span>
                  <span className={classes.moreDetails}>
                    Book now to receive the clinics address details and phone
                    number
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.choose}>Choose your appointment </div>
            <div className={classes.schedulerWrapper}>
              <div className={classes.SchedulerContainer}>
                <span>
                  <Scheduler />
                  <span className={classes.appointment}>
                    Appointment reservation
                  </span>
                </span>
              </div>
            </div>
            <div className={classes.bookingFooter}>
              <span className={classes.footerIcon}>
                {" "}
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
              <div className={classes.footerText}>
                <span className={classes.reservationText}>
                  Book online, Pay at the clinic!
                </span>
                <span>Doctor requires reservation!</span>
              </div>
            </div>
          </span>
          {bookingModal && (
            <AppointmentModal
              setBookingModal={setBookingModal}
              doctor={doctor}
              onClose={() => setBookingModal(false)}
            />
          )}
          <button
            className={classes.bookingFlex}
            onClick={() => setBookingModal(true)}
          >
            book
          </button>
        </span>
      </div>
    </div>
  );
};

export default BookingSection;
