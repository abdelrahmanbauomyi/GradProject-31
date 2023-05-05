import React from "react";
import Home from "../components/Home/Home";
import Details from "../components/NavigationBar/Details/Details";
import Footer from "../components/Footer/Footer";
import Subscribe from "../components/Footer/Subscribe";
import Tiktok from "../TiktokReels/Tiktok";
const HomeScreen = () => {
  return (
    <div>
      <Details />
      <Home></Home>
      <Tiktok />
      <Subscribe />
    </div>
  );
};

export default HomeScreen;
