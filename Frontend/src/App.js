import React from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileInfo from "./Screens/ProfileInfo";
import EditProfile from "./Screens/EditProfile";
import MyAppointments from "./Screens/MyAppointments";
import FavouriteArticles from "./Screens/FavouriteArticles";
import SearchPage from "./components/SearchPage/SearchPage";

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
        <Route
          path="/my_appointments"
          element={<MyAppointments></MyAppointments>}
        />
        <Route path="/favourite_articles" element={<FavouriteArticles />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
