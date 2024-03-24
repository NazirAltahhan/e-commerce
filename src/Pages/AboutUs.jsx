import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutUsImage from "../Assets/Img/about-us.jpeg";

const AboutUs = () => {
  return (
    <div>
      <Container className="about-us-container">
        <Row>
          <Col>
            <h2 className="page-title">About Us</h2>
            <p>
              Welcome to Great Taste website! Where we you will taste a non
              forgetable taste of home made cake.
            </p>
            <p>
              Feel free to contact us if you have any questions or suggestions.
            </p>
            <div>
              <h4>Contact Information</h4>
              <div>
                <p>Email: GreatTaste@gmail.com</p>
                <p>Phone: 123-456-7890</p>
              </div>
            </div>
            <div>
              <h4>Social Media</h4>
              <div>
                <p>
                  <a href="https://www.facebook.com" target="_blank">
                    Great taste Facebook
                  </a>
                </p>
                <p>
                  <a href="https://instagram.com" target="_blank">
                    Great Taste Instagram
                  </a>
                </p>
              </div>
            </div>
            <img src={aboutUsImage} alt="" />
          </Col>
        </Row>
        <div></div>
      </Container>
    </div>
  );
};

export default AboutUs;
