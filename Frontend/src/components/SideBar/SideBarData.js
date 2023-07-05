import React from 'react';



import { CgProfile } from "react-icons/cg";
import { RiProfileFill } from "react-icons/ri";
import { BsFillCalendarDateFill } from "react-icons/bs";
// import { GrLogout } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import styles from "./SideBar.module.css";

export const SidebarData = [
  {
    title: 'My Profile',
    path: '/profile_info',
    icon: <CgProfile />,
    cName: styles[`nav-text`],
    
  },
  { 
    title: 'Edit Profile',
    path: '/edit_profile',
    icon: <RiProfileFill />,
    cName: styles[`nav-text`],
    
  },
  {
    title: 'My Appointments',
    path: '/my_appointments',
    icon: <BsFillCalendarDateFill />,
    cName: styles[`nav-text`],
    
  },
  {
    title: "Favourite Articles",
    path: '/favourite_articles',
    icon: <MdFavorite />,
    cName: styles[`nav-text`],
    
  } 
];