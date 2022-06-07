import { Container, Row, Col } from "react-bootstrap";
import "../style/landingPage.css";
const Footer = () => {
  return (
    <footer className="footer fluid bg-dark text-white">
      <div>
        <Container class="mt-10">
          <Row>
            <Col xs>
              <h5>Newsletter subscription</h5>
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
            <Col>
              <h5>Account</h5>
              <p>Rewards Programme</p>
              <p>Returns & Exchanges</p>
            </Col>
            <Col>
              <h5>About Us</h5>
              <p>Careers</p>
              <p>Global</p>
              <p>TP Edit</p>
              <p>Contact Us</p>
            </Col>
            <Col>
              <h5>Customer Care</h5>
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
