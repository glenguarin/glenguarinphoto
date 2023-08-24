import React, { useState, useEffect } from "react";
import "../index.css";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/gallery1.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <>
      <p className="text-center mt-2 pt-5 fs-2 mb-5">Wedding and Prenup</p>

      <div className="gallery1">
        {images.map((item, index) => {
          return (
            <div className="pics1" key={index}>
              <img src={item.image} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
