import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const IconStar = ({ props }) => {
  return (
    <FontAwesomeIcon
      icon={faStar}
      style={{
        width: props.width,
        height: props.height,
        marginRight: props.marginRight,
        color: props.color,
      }}
    />
  );
};

const ReviewStars = (props) => {
  return (
    <Fragment>
      <span>
        <IconStar props={props} />
      </span>
      <span>
        <IconStar props={props} />
      </span>
      <span>
        <IconStar props={props} />
      </span>
      <span>
        <IconStar props={props} />
      </span>
      <span>
        <IconStar props={props} />
      </span>
    </Fragment>
  );
};

export default ReviewStars;
