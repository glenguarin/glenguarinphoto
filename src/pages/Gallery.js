import React, { useState, useEffect } from "react";
import "../index.css";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/gallery.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <>
      <p className="text-center mt-2 pt-5 fs-2 mb-0">Photo Gallery</p>
      <h1 className="text-center mb-5">Candid moments and natural portraits</h1>
      <div className="gallery">
        {images.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img src={item.image} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
