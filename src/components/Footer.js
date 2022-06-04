import { Container, Row, Col } from "react-bootstrap";
import "../style/landingPage.css";
const Footer = () => {
  return (
    <footer className="footer fluid bg-dark text-white">
      <div>
        <Container>
          <Row>
            <Col xs>
              Newsletter subscription
              <p>
                Sign up for Tudungpeople updates to receive information about
                new arrivals and future events.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col xs={{ order: 12 }}>
              <h6>Account</h6>
              <p>Rewards Programme</p>
              <p>Returns & Exchanges</p>
            </Col>
            <Col xs={{ order: 1 }}>
              <h6>About Us</h6>
              <p>Careers</p>
              <p>Global</p>
              <p>TP Edit</p>
              <p>Contact Us</p>
            </Col>
            <Col xs={{ order: 1 }}>
              <h6>Customer Care</h6>
              <p>Privacy Policy</p>
              <p>Refund Policy</p>
              <p>Shipping Policy</p>
              <p>Terms of Service</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
