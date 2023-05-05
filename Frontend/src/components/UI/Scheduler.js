import React from "react";
import classes from "./Scheduler.module.css";

const Scheduler = () => {
 return (
  <div   className={classes.container}>
  <div>
    <div>
      <div className={classes.day}>
        today</div>
      <div className={classes.time}> 
        available appointments
      </div>
      <div className={classes.book}>book</div>
    </div>
  </div>
</div>

 );

};

export default Scheduler;