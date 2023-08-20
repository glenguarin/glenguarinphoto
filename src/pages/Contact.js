import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <>
      <p className="text-center mt-2 pt-5 fs-2 mb-0">Contact me</p>
      <h1 className="text-center mb-5">
        Got big plans for an awesome event? Shoot me a message and let's chat!
      </h1>
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="contactForm.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="John Doe" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="JohnDoe@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactForm.Name">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="email" placeholder="+64 21 123 4567" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactForm.Name">
            <Form.Label>Service your inquiring for</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ex. Wedding Photography, Family Portrait etc."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactForm.Name">
            <Form.Label>Location to shoot</Form.Label>
            <Form.Control type="email" placeholder="Auckland" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Contact;
