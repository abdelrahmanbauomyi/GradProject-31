import React from "react";
import Home from "../components/Home/Home";
import Details from "../components/NavigationBar/Details/Details";
import Footer from "../components/Footer/Footer";
import Subscribe from "../components/Footer/Subscribe";
import Tiktok from "../TiktokReels/Tiktok";
import Header from "../components/Header/Header";
const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Details />
      <Home></Home>
      <Tiktok />
      <Subscribe />
    </div>
  );
};

export default HomeScreen;
