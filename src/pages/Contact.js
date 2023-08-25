import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";
import ContactImageSlider from "../components/ContacttImageSlider";

function Contact() {
  return (
    <>
      <p className="text-center mt-2 pt-5 fs-2 mb-5">Contact</p>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mb-5">...Let's Talk</h1>
            <Form>
              <Form.Group className="mb-3" controlId="contactForm.Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="John Doe" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="JohnDoe@example.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactForm.Name">
                <Form.Label>Service your inquiring for</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ex. Wedding Photography, Family Portrait etc."
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col>
            <ContactImageSlider />
            <Row className="justify-content-end">
              <Col d-flex justify-content-between>
                <p>E-mail Address</p>
                <p>glenguarinphoto@gmail.com</p>
              </Col>
              <Col>
                <p>Phone Number</p>
                <p>021 172 0204</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
