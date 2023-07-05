import React from "react";
import classes from "./ArticleCard.module.css";
import image from "../../../assets/secondary.png";

const SecondaryArticleCard = () => {
  return (
    <div className={classes["secondary-card"]}>
      <div className={classes["img-wrapper"]}>
        <div className={classes["secondary-card__img"]}>
          <img src={image} alt="article-img" />
          <div className={classes["secondary-card__square"]}></div>
        </div>
      </div>
      <div className={classes["secondary-description"]}>
        <h2>Card Title</h2>
        <p>
          Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sit rhoncus imperdiet nisi. Card desription. Lorem ipsum dolor
        </p>
        <div className={classes["secondary-info"]}>
          <p>1.2k</p>
          <a href="https://www.google.com">See more</a>
        </div>
      </div>
    </div>
  );
};

export default SecondaryArticleCard;
