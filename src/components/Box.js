import React from "react";

const Box = (props) => {
  return (
    <div
      style={{
        ...styles.box,
        ...styles[props.size],
      }}
    ></div>
  );
};

const styles = {
  box: {
    margin: "5px 5px",
    padding: 0,
    borderRadius: "16px",
    backgroundColor: "#adb5bded",
  },
  small: {
    gridRowEnd: "span 26",
  },
  medium: {
    gridRowEnd: "span 33",
  },
  large: {
    gridRowEnd: "span 45",
  },
};

export default Box;
