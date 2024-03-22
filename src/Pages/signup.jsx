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
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();
  const { SignUp } = useAuth();
  const handleRegister = () => {
    SignUp(name);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
    navigate("/user");
  };

  return (
    <>
      <div className="login-form-container">
        <form>
          <Container className="login-container">
            <div className="login-tx">
              <h3><i>Enjoi with US</i></h3>
            </div>

            <div className="login-form">
              <Row>
                <Col>
                  <InputGroup className="mt-2">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      {" "}
                      First Name
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      id="UserName"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mt-2">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      {" "}
                      Last Name
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      id="Password"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mt-2">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      {" "}
                      Email
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      id="Password"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mt-2">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      {" "}
                      Age
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      id="Password"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mt-2">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      {" "}
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
              <Row className=" p-4">
                <Button variant="secondary" onClick={handleRegister}>
                  {" "}
                  Sign Up{" "}
                </Button>
              </Row>
            </div>
            <div className="login-tx">
              <h6>Or You Have An Account? </h6>
              <a href="/">Login Here </a>
            </div>
          </Container>
        </form>
      </div>
    </>
  );
};
export default SignUp;
