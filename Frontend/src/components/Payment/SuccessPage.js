import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SuccessPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const updateInDataBase = async () => {
      const response = await axios.post("PUT URL HERE", {
        appointmendId: id,
      });
      if (response.ok) {
        alert("Your Appointment was reserved successfully");
        navigate("/search");
      }
    };
    updateInDataBase();
  }, []);
  return <div>SuccessPage</div>;
};

export default SuccessPage;
