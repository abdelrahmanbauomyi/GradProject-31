import React, { useState } from "react";

import styles from "./SideBar.module.css";

import { Link } from "react-router-dom";
import { SidebarData } from "./SideBarData";
function SideBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveItem = (index) => {
    setActiveIndex(index);
  };

  return (
    <React.Fragment>
      <nav className={styles[`nav-menu`]}>
        <ul className={styles[`nav-menu-items`]}>
          <li className={styles[`navbar-header`]}>
            <h1>
              <span>Online</span> Clinic
            </h1>
          </li>
          {SidebarData.map((item, index) => {
            const active = activeIndex === index ? styles.active : "";
            return (
              <li
                key={index}
                className={`${styles[`nav-text`]} ${active}`}
                onClick={() => handleActiveItem(index)}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default SideBar;
