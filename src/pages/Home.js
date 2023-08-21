import React, { useState, useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import myImage from "../images/profileimg.png";
import { Stack } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <ImageSlider />
      <Container fluid>
        <p className="text-center mt-5 pt-5 pb-0">
          AUCKLAND BASED EVENT & PORTRAIT PHOTOGRAPHER
        </p>
        <h1 className="text-center pt-4 pb-3 fw-bold text-large">Welcome</h1>
        <Container className="text-center pb-5">
          Hi, I'm Glen, an Auckland-based event and portrait photographer with a
          passion for capturing the beauty of authenticity. My photography style
          is all about making moments look natural and embracing candid shots. I
          believe that genuine emotions and spontaneous interactions are what
          truly make a photograph come alive. Let's work together to create
          stunning visuals that tell your story in the most real and unscripted
          way possible.
        </Container>
        <Container className="d-flex justify-content-center">
          <Row>
            <Button href="gallery" variant="dark" size="lg">
              VIEW GALLERY
            </Button>
          </Row>
        </Container>
        <Container className="d-flex justify-content-center mt-5 pt-2">
          <Image className="profile-pic" src={myImage} roundedCircle />
        </Container>
        <Container>
          <p className="text-center mt-2 pt-5 fs-2 mb-0">Reviews</p>
          <h1 className="text-center mb-5">
            Some feedbacks shared by delighted customers
          </h1>
          <Stack className="text-center text-white">
            <Row className="p-font bg-secondary mb-3">
              <p className="mt-5 fs-2">"The photos are beautiful"</p>
              <p className="mb-5">
                Yay! Thanks for capturing our wedding, Glen! The photos are
                beautiful, and will allow us to look back on this special day
                for the years to come. <br />- Kitty
              </p>
            </Row>
            <Row className="bg-secondary mb-3">
              <p className="fs-2">
                "Kudos to your expertise and professionalism"
              </p>
              <p>
                Many thanks Glen for capturing happy, emotional and intimate
                moments on our special day. Kudos to your expertise and
                professionalism as photographer. All the best on your business,
                for sure not just Pinoys but everyone in Auckland will choose
                you as their photographer. 😍😍😍 <br /> - Richelle
              </p>
            </Row>
            <Row className="bg-secondary mb-3">
              <p className="fs-2">"Thank you so much"</p>
              <p>
                Thank you so much. Hope you guys enjoyed your day with us.
                Blessings to you guys ❤ <br /> - Maureen
              </p>
            </Row>
            <Row className="bg-secondary mb-">
              <p className="fs-2">
                "These people will risk their lives to get the perfect shot!!!"
              </p>
              <p>
                These people will risk their lives to get the perfect shot!!!
                Love their work and friendly company 🙂 <br /> - Kevin
              </p>
            </Row>
          </Stack>
        </Container>
      </Container>
    </div>
  );
};

export default App;
