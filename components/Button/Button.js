import React from "react";
import styles from "./Button.module.css"

const Button =({ text, dark}) => {
    const buttonClass = dark ? styles.darkButton : styles.lightButton;

    return <button className={buttonClass}> {text} </button>
};

export default Button;