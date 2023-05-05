import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileInfo from "./Screens/ProfileInfo";
import EditProfile from "./Screens/EditProfile";
import BalanceHormones from "./components/NavigationBar/NavbarScreens/BalanceHormones";
import MyAppointments from "./Screens/MyAppointments";
import FavouriteArticles from "./Screens/FavouriteArticles";
import SearchPage from "./components/SearchPage/SearchPage";
import Tips from "./components/NavigationBar/NavbarScreens/Tips";
import CheckUp from "./components/NavigationBar/NavbarScreens/CheckUp";
import Coivd from "./components/NavigationBar/NavbarScreens/Covid";
import ContactUs from "./components/NavigationBar/NavbarScreens/ContactUs";
import NavBar from "./DoctorComponents/DrNavBar/NavBar";
import QuestionForm from "./components/Questions/QuestionForm/QuestionFrom";
import QuestionPage from "./components/Questions/QuestionPage/QuestionPage";
import DashBoard from "./DoctorComponents/DrScreens/DashBoard";
import SideScreen from "./DoctorComponents/DrScreens/SideScreen";
import DoctorEdit from "./DoctorComponents/DrScreens/DoctorEdit";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route
            exact
            path="/profile_info"
            element={<ProfileInfo></ProfileInfo>}
          />
          <Route path="/edit_profile" element={<EditProfile />} />
          <Route path="/CheckUp" element={<CheckUp />} />
          <Route path="/BalanceHormones" element={<BalanceHormones />} />
          <Route path="/Coivd" element={<Coivd />} />
          <Route
            path="/myappointments"
            element={<MyAppointments></MyAppointments>}
          />
          <Route path="/favourite_articles" element={<FavouriteArticles />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/Contact Us" element={<ContactUs />} />
          <Route path="/Health Tips" element={<Tips />} />
          <Route path="/HomePage" element={<NavBar />} />
          <Route path="/ask" element={<QuestionForm />} />
          <Route path="/questions/:questionId" element={<QuestionPage />} />
          <Route path="/DrDashBoard" element={<DashBoard />} />
          <Route path="/SideScreen" element={<SideScreen />} />
          <Route path="/DoctorEdit" element={<DoctorEdit />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
