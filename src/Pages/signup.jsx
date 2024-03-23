import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles/login.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/ContextAuthuntication";


const SignUp = () => {
  const navigate = useNavigate();
  const { SignUp } = useAuth();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();

  const handleRegister = () => {
    SignUp(firstName);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
    localStorage.setItem("phone", phone);
    navigate("/home");
  };

  return (
    <>
      <div className="login-form-container">
        <form>
          <Container className="login-container">
            <div>
              <h3><i>Join us to Enjoy a Great Taste</i></h3>
            </div>

            <div className="login-form">
              <Row>
                <Col>
                  <InputGroup className="mt-2">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      First name
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      id="firstName"
                      value={firstName}
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mt-2">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Last name
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      id="lastName"
                      value={lastName}
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mt-2">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Email
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      id="email"
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mt-2">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Phone
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      id="phone"
                      value={age}
                      type="tel"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mt-2">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Age
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      id="age"
                      value={age}
                      type="number"
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mt-2">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Password
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      id="Password"
                      type="password"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="p-5">
                <Button variant="info" onClick={handleRegister}>
                  Sign Up
                </Button>
              </Row>
            </div>
            <div>
              <h6>Or if you have an account? </h6>
              <a href="/">Login Here </a>
            </div>
          </Container>
        </form>
      </div>
    </>
  );
};
export default SignUp;
