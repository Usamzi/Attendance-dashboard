import React from "react";
import styles from "./checkbox.module.css";

const Checkbox = ({ onChange, readOnly, checked,onClick,style }) => {
  return (
    <>
      <input
        type="checkbox"
        className={`${styles.customCheckbox} ${styles.relative}`}
        onChange={onChange}
        checked={checked}
        readOnly={readOnly}
        onClick={onClick}
        style={style}
      />
    </>
  );
};

export default Checkbox;
