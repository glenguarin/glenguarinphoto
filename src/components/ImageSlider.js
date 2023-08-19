import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

function ImageSlider() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/index.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <Carousel className="carousel-container">
      {images.map((image) => (
        <Carousel.Item key={image.id} interval={3000}>
          <img
            className="d-block mw-100"
            src={image.image}
            alt={`Slide ${image.id}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageSlider;
