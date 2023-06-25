import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FailurePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 3000);
    return () => clearTimeout(timer);
  }, []);
  return <div>Your appointment was not reserved, try again</div>;
};

export default FailurePage;
