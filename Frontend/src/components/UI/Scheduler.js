import React from "react";
import classes from "./Scheduler.module.css";

const Scheduler = () => {
  return (
    <div className={classes.scheduler}>
      <div className={classes.navArrow}>
      </div>
      <span>
        <span className={classes.container}>
          <div className={classes.col}>
            <div className={classes.date}>Wed 05/10</div>
            <div className={classes.timeCol}>
              <div className={classes.slots}>
                <span className={classes.time}>5:00pm</span>
                <span className={classes.time}>5:30pm</span>
                <span className={classes.time}>6:00pm</span>
                <span className={classes.time}>6:30pm</span>
                <span className={classes.time}>7:00pm</span>
              </div>
              <span className={classes.more}>More</span>
            </div>
            <div className={classes.book}>book</div>
          </div>
          <div className={classes.col}>
            <div className={classes.date}>Wed 05/10</div>
            <div className={classes.timeCol}>
              <div className={classes.slots}>
                <span className={classes.time}>5:00pm</span>
                <span className={classes.time}>5:30pm</span>
                <span className={classes.time}>6:00pm</span>
                <span className={classes.time}>6:30pm</span>
                <span className={classes.time}>7:00pm</span>
              </div>
              <span className={classes.more}>More</span>
            </div>
            <div className={classes.book}>book</div>
          </div>
          <div className={classes.col}>
            <div className={classes.date}>Wed 05/10</div>
            <div className={classes.timeCol}>
              <div className={classes.slots}>
                <span className={classes.time}>5:00pm</span>
                <span className={classes.time}>5:30pm</span>
                <span className={classes.time}>6:00pm</span>
                <span className={classes.time}>6:30pm</span>
                <span className={classes.time}>7:00pm</span>
              </div>
              <span className={classes.more}>More</span>
            </div>
            <div className={classes.book}>book</div>
          </div>
        </span>
      </span>
      <div className={classes.navArrow2}></div>
    </div>
  );
};

export default Scheduler;
