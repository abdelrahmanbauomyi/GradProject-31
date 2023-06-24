import React from "react";
import styles from "./Announcements.module.css";
import { useNavigate } from "react-router-dom";
import DrSideBar from "../DoctorComponents/DrSideBar/DrSideBar";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import headersConfig from "../utils/headersConfig";
import { setRoomId } from "../chats/data";
import timeFormatter from "../utils/timeFormatter";
import Button from "react-bootstrap/Button";

function Announcements(props) {
  const [appointments, setAppointments] = useState([]);
  const config = headersConfig("booking/userhistory");

  useEffect(() => {
    axios
      .get("http://localhost:8000/booking/userhistory", config)
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const announcements = [
    {
      announcement: "Meeting has been rescheduled for",

      profilePictureUrl:
        "https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM=",
    },
    {
      announcement: "Meeting has been rescheduled for",

      profilePictureUrl:
        "https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM=",
    },
    {
      announcement: "Meeting has been rescheduled for",

      profilePictureUrl:
        "https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM=",
    },
    {
      announcement: "Meeting has been rescheduled for",

      profilePictureUrl:
        "https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM=",
    },
    {
      announcement: "Meeting has been rescheduled for",

      profilePictureUrl:
        "https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM=",
    },
    // Add more announcement objects with the status property
  ];

  const history = useNavigate();
  const handleRowClick = (appointment) => {
    if (appointment.status == "ongoing") {
      const roomId = appointment.roomId;
      setRoomId(roomId);
      history("/VideoMeeting", { state: { roomId: roomId } });
    }
  };

  const [visibleRows, setVisibleRows] = useState(3);
  const [showAllRows, setShowAllRows] = useState(false);
  const [seeLess, setSeeLess] = useState(false);
  const handleSeeMore = () => {
    setVisibleRows(appointments.length);
    setShowAllRows(true);
    setSeeLess(true);
  };

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const headConfig = headersConfig("review");
  const handleReviewSubmit = (event) => {
    event.preventDefault();

    const { response } = axios.patch(
      "http://localhost:8000/review",
      {
        rating: rating,
        comment: comment,
      },
      headConfig
    );
    console.log(response);

    setRating(0);
    setComment("");
  };

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const displayedAppointments = showAllRows
    ? appointments
    : appointments.slice(0, visibleRows);
  const showMoreButton = visibleRows < appointments.length;

  return (
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
              <th>Doctor Name</th>
              <th></th>
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
                <td>{appointment.Doctor.Dname}</td>
                <td>
                  {/* Button with different styles and disabled state */}
                  <Button
                    variant={
                      appointment.status === "ongoing" ? "primary" : "info"
                    }
                    disabled={appointment.status !== "ongoing"}
                    onClick={() => handleRowClick(appointment)}>
                    Join
                  </Button>
                </td>
                <td>
                  {/* Button with different styles and disabled state */}
                  <Button
                    variant={
                      appointment.status === "Finished" ? "primary" : "info"
                    }
                    disabled={appointment.status !== "Finished"}
                    onClick={() => toggleForm()}>
                    RATE US
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <div>
            {isOpen && (
              <form onSubmit={handleReviewSubmit} className={styles.reviewForm}>
                <h2 className={styles.formTitle}>Leave a Review</h2>
                <div className={styles.ratingContainer}>
                  <label className={styles.ratingLabel}>Rating:</label>
                  <div className={styles.starRating}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`${styles.star} ${
                          star <= rating
                            ? styles.filled
                            : star - 0.5 <= rating
                            ? styles["half-filled"]
                            : ""
                        }`}
                        onClick={() => handleRatingChange(star)}>
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.commentContainer}>
                  <label className={styles.commentLabel}>Comment:</label>
                  <textarea
                    className={styles.commentTextarea}
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Write your comment here..."></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
              </form>
            )}
          </div>
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

        <div className={styles.announcementsContainer}>
          <h2 className={styles.uptxt}>Announcements</h2>
          <div className={styles.announcementList}>
            {announcements.map((announcement, index) => (
              <div key={index} className={styles.announcementRow}>
                <div className={styles.profilePicture}>
                  <img src={announcement.profilePictureUrl} alt="Profile" />
                </div>
                <div className={styles.announcementContent}>
                  <div>
                    <span className={styles.announcement}>
                      {announcement.announcement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <span className={styles.seeMoreText}>See More</span>
        </div>
      </div>
      <DrSideBar />
    </div>
  );
}

export default Announcements;
