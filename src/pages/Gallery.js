import React from "react";
import Box from "../components/Box";

const Gallery = () => {
  return (
    <div style={styles.gallery_container}>
      <Box size="small" />
      <Box size="medium" />
      <Box size="large" />
      <Box size="small" />
      <Box size="medium" />
      <Box size="large" />
      <Box size="small" />
      <Box size="medium" />
      <Box size="large" />
      <Box size="small" />
      <Box size="medium" />
      <Box size="large" />
      <Box size="small" />
      <Box size="medium" />
      <Box size="large" />
      <Box size="small" />
      <Box size="medium" />
      <Box size="large" />
      <Box size="small" />
      <Box size="medium" />
      <Box size="large" />
      <Box size="small" />
      <Box size="medium" />
      <Box size="large" />
      <Box size="small" />
      <Box size="medium" />
      <Box size="large" />
      <Box size="medium" />
      <Box size="medium" />
      <Box size="medium" />
      <Box size="small" />
      <Box size="small" />
    </div>
  );
};

const styles = {
  gallery_container: {
    margin: 0,
    padding: 0,
    width: "80vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    // backgroundColor: "black",
  },
};

export default Gallery;
