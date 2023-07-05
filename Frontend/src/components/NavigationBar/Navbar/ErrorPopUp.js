import React from 'react'
import styles from "./ErrorPopUp.module.css"

function ErrorPopUp(props) {
    const { top, left, right } = props;

    const style = {
        position: 'absolute',
        top,
        left,
        right
      };
  return (
    <div className={styles.bar} style={style}>{props.children}</div>
  )
}

export default ErrorPopUp