import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Reviews = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="d-flex" xs={12} md={6}>
            <Card className="mb-3">
              <Card.Header className="text-center fs-3 h-50">
                "The photos are beautiful"
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {" "}
                    Yay! Thanks for capturing our wedding, Glen! The photos are
                    beautiful, and will allow us to look back on this special
                    day for the years to come.{" "}
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Kitty</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex" xs={12} md={6}>
            <Card className="mb-3">
              <Card.Header className="text-center fs-3 h-50">
                "Kudos to your expertise and professionalism"
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {" "}
                    Many thanks Glen for capturing happy, emotional and intimate
                    moments on our special day. Kudos to your expertise and
                    professionalism as photographer. 😍😍😍{" "}
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Richelle</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          {/* </Row> */}
          {/* <br /> */}
          {/* <Row> */}
          <Col className="d-flex" xs={12} md={6}>
            <Card className="mb-3">
              <Card.Header className="text-center fs-3 h-50">
                "Thank you so much"
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {" "}
                    Thank you so much. Hope you guys enjoyed your day with us.
                    Blessings to you guys ❤
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Maureen</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex" xs={12} md={6}>
            <Card className="mb-3">
              <Card.Header className="text-center fs-3 h-50">
                "These people will risk their lives to get the perfect shot!!!"
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {" "}
                    These people will risk their lives to get the perfect
                    shot!!! Love their work and friendly company 🙂{" "}
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Kevin</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
