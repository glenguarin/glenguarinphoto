// import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";
import ContactImageSlider from "../components/ContacttImageSlider";
import { Envelope, DeviceMobile } from "@phosphor-icons/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [formValid, setFormValid] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    let isEmpty = false;
    formData.forEach((value) => {
      if (!value) {
        isEmpty = true;
      }
    });

    if (isEmpty) {
      alert("Please fill in all fields");
      setFormValid(false);
      return;
    }

    emailjs
      .sendForm(
        "service_3y0ffkz",
        "template_lrljezl",
        form.current,
        "dkJzF9fW6EIm-Hm-q"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Sent!");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <p className="text-center mt-2 pt-5 fs-2 mb-5">Contact</p>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mb-5">...Let's Talk</h1>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="from_name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="from_name"
                  placeholder="John Doe"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="reply_to">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="reply_to"
                  placeholder="JohnDoe@example.com"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="service_type">
                <Form.Label>Service your inquiring for</Form.Label>
                <Form.Control
                  type="text"
                  name="service"
                  placeholder="Ex. Wedding Photography, Family Portrait etc."
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  rows={3}
                  placeholder="Type your message here."
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
            {!formValid && (
              <div className="text-danger mt-2">
                {" "}
                Please fill in all fields.
              </div>
            )}
          </Col>
          <Col>
            <ContactImageSlider />
            <Row className="text-end">
              <p className="mt-2 mb-0 fw-bold">
                <Envelope size={22} />
                E-mail Address
              </p>
              <p className="fst-italic">glenguarinphotography@gmail.com</p>
            </Row>
            <Row className="text-end">
              <p className="mt-1 mb-0 fw-bold">
                <DeviceMobile className="text-end" size={22} />
                Phone Number
              </p>
              <p className="fst-italic">021 172 0204</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
