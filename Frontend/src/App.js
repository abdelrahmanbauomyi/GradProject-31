import React from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileInfo from "./Screens/ProfileInfo";
import EditProfile from "./Screens/EditProfile";
import BalanceHormones from "./components/NavigationBar/NavbarScreens/BalanceHormones";
import MyAppointments from "./Screens/MyAppointments";
import FavouriteArticles from "./Screens/FavouriteArticles";
import SearchPage from "./components/SearchPage/SearchPage";
import Tips from "./components/NavigationBar/NavbarScreens/Tips"
import CheckUp from './components/NavigationBar/NavbarScreens/CheckUp'
import Coivd from './components/NavigationBar/NavbarScreens/Covid'
import ContactUs from "./components/NavigationBar/NavbarScreens/ContactUs";
import NavBar from "./DoctorComponents/DrNavBar/NavBar";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen />}></Route>
        <Route
          exact
          path="/profile_info"
          element={<ProfileInfo></ProfileInfo>}
        ></Route>
        <Route path="/edit_profile" element={<EditProfile />} />
        <Route path="/CheckUp" element={<CheckUp />}/>
        <Route path="/BalanceHormones" element={<BalanceHormones />}/>
        <Route path="/Coivd" element={<Coivd />}/>
        <Route
          path="/my_appointments"
          element={<MyAppointments></MyAppointments>}
        />
        <Route path="/favourite_articles" element={<FavouriteArticles />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/Contact Us" element={<ContactUs/>}/>
        <Route path="/Health Tips" element={<Tips/>}/>
        <Route path="/Home Page" element={<NavBar/>}/>
      </Routes>
    </Router>
  );
}

export default App;