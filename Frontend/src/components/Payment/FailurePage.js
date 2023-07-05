import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FailurePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    alert("Your payment has failed. Please try again");
    navigate("/search");
  }, []);
  return <div>Your appointment was not reserved, try again</div>;
};

export default FailurePage;
