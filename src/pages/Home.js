import React, { useState, useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import CommentsSlider from "../components/CommentsSlider";
import Gallery1 from "../components/Gallery1";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import myImage from "../images/profileimg.png";
import { Stack } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Container className="m-0 p-0 pb-5" fluid>
        <ImageSlider />
      </Container>
      <Container fluid>
        <Container className="fs-5 pt-5 m-5 text-center lh-lg">
          Weddings, Events and Familty Portraits
        </Container>

        <h1 className="text-center mt-5 pb-3 fw-bold text-large">HELLO.</h1>
        <Container className="fs-5 text-center pb-5 lh-lg">
          My name is Glen, I'm an Auckland-based event and portrait photographer
          with a passion for capturing the beauty of authenticity. My
          photography style is all about making moments look natural and
          embracing candid shots. I believe that genuine emotions and
          spontaneous interactions are what truly make a photograph come alive.
          Let's work together to create stunning visuals that tell your story in
          the most real and unscripted way possible.
        </Container>
        <Container className="d-flex justify-content-center">
          <Row>
            <Button className="btn-lg" href="gallery" variant="dark">
              VIEW GALLERY
            </Button>
          </Row>
        </Container>
        <Container className="d-flex justify-content-center mt-5 pt-2 pb-5">
          <Image className="profile-pic" src={myImage} roundedCircle />
        </Container>
        <Container>
          <h1 className="text-center mt-5 pt-5 pb-3 fw-bold text-large">
            TESTIMONIALS.
          </h1>
        </Container>
        <Container className="fs-5 text-center pb-5 lh-lg">
          Client feedback.
        </Container>
        <CommentsSlider />
      </Container>
      <Container>
        <Gallery1 />
      </Container>
    </div>
  );
};

export default App;
