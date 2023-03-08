import React from "react";
import classes from "./ArticleCard.module.css";
import articleImage from "../../assets/article.png";

const MainArticleCard = () => {
  return (
    <div className={classes["main-card"]}>
      <div className={classes["main-card__img"]}>
        <img src={articleImage} alt="article-img" />
        <div className={classes["main-card__square"]}></div>
      </div>
      <div className={classes.description}>
        <h2>Card Title</h2>
        <p>
          Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sit rhoncus imperdiet nisi.
          Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sit rhoncus imperdiet nisi.
          elit. Sit rhoncus imperdiet nisi.
        </p>
      </div>
      <div className={classes.info}>
        <p>
          1.2k
        </p>
        <a href="https://www.google.com">See more</a>
      </div>
    </div>
  );
};

export default MainArticleCard;
