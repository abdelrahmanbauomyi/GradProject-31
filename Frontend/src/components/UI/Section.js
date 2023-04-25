import React from "react";
import classes from "./Section.module.css";

const Section = (props) => {
  return (
    <section className={classes.main}>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.paragraph}>{props.paragraph}</p>
      {props.children}
    </section>
  );
};

export default Section;
