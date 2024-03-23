import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const AboutUs = () => {
  return (
    <div>
      <Container className="about-us-container">
        <Row>
            <Col>
                <h2>About Us</h2>
                <p>Welcome to Great Taste website! Where we you will taste a non forgetable taste of home made cake.</p>
                <p>Feel free to contact us if you have any questions or suggestions.</p>
                <img src="../../Assets/img/1.jpg" alt=""/>
            </Col>
        </Row>
        <div></div>
      </Container>
    </div>
  );
};

export default AboutUs;
