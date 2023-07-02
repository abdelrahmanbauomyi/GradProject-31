import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import headersConfig from "../../utils/headersConfig";

const SuccessPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const updateInDataBase = async () => {
      const config = headersConfig("booking/reserveappointment");
      const response = await axios.post(
        "http://localhost:8000/checkout-success",
        {
          appointmentId: id,
        },
        config
      );
      if (response.status === 200) {
        alert("Your Appointment was reserved successfully");
        navigate("/profile_info");
      } else {
        alert("Something went wrong");
        navigate("/search");
      }
    };
    updateInDataBase();
  }, []);
  return <div className="text-center">SuccessPage</div>;
};

export default SuccessPage;
