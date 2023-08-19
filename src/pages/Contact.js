import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";

const Contact = () => {
  return (
    <Container className="font__size">
      <Row className="mb-4 mt-3">
        <Col lg="8">
          <h2 className="mb-4">Contact me</h2>
        </Col>
      </Row>
      <Row className="mb-5">
        <p>
          Got big plans for an awesome event? We want to hear what you're
          cooking up and how we can help make it picture-perfect. Grab a virtual
          seat, and let's brainstorm over a digital coffee. Ready to make some
          photo magic? Shoot us a message and let's chat!
        </p>
      </Row>

      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="details__form color_sec">Get in touch</h3>
          <address className="py-3">
            <strong>Email : glenguarinphoto@gmail.com</strong>
            <br />
            <br />
            <p>
              <strong>Phone : +64 021 1720204</strong>
            </p>
          </address>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form className="contact__form w-100">
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0 mt-3 mb-3"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
            ></textarea>
            <Row>
              <Col lg="12" className="form-group">
                <button className="ac_btn" type="submit">
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
