import React from "react";
import Section from "../../UI/Section";
import classes from "./LatestArticle.module.css";
import MainArticleCard from "./MainArticleCard";
import SecondaryArticleCard from "./SecondaryArticleCard";
import useWidthAndHeight from "../../../hooks/useWidthAndHeight";

const LatestArticle = () => {
  const [width] = useWidthAndHeight();

  if (width < 1200) {
    return (
      <Section title="Our Latest Articles" paragraph="Written by our experts">
        <div className={classes.holder}>
          {/* <MainArticleCard /> */}
          <div className={classes["secondary-holder"]}>
            <SecondaryArticleCard />
            <SecondaryArticleCard />
            <SecondaryArticleCard />
          </div>
        </div>
      </Section>
    );
  }
  if (width < 2200)
    return (
      <Section title="Our Latest Articles" paragraph="Written by our experts">
        <div className={classes.holder}>
          <MainArticleCard />
          <div className={classes["secondary-holder"]}>
            <SecondaryArticleCard />
            <SecondaryArticleCard />
          </div>
        </div>
      </Section>
    );
  return (
    <Section title="Our Latest Articles" paragraph="Written by our experts">
      <div className={classes.holder}>
        <MainArticleCard />
        <div className={classes["secondary-holder"]}>
          <SecondaryArticleCard />
          <SecondaryArticleCard />
        </div>
        <div className={classes["secondary-holder"]}>
          <SecondaryArticleCard />
          <SecondaryArticleCard />
        </div>
      </div>
    </Section>
  );
};

export default LatestArticle;
