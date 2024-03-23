import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles/login.css";
import Button from "react-bootstrap/Button";
import { useAuth } from "../Context/ContextAuthuntication";
import { useState } from "react";

const Login = () => {
  const [UserName, setUserName] = useState();
  const { login } = useAuth();
  const LoginApp = () => {
    login(UserName);
  };

  return (
    <>
      <div className="login-form-container">
        <form>
          <Container className="login-container">
            <div>
              <h3><i>Login to enjoy a Great Taste</i> </h3>
            </div>

            <div className="login-form">
              <Row>
                <Col>
                  <InputGroup className="mt-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Name
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      id="UserName"
                      value={UserName}
                      type="text"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mt-3">
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
                <Button variant="info" onClick={() => LoginApp()}>
                  Log In
                </Button>
              </Row>
            </div>
            <div>
              <h6>Or if you don't have an account? </h6>
              <a href="/signUp">Rigester Now </a>
            </div>
          </Container>
        </form>
      </div>
    </>
  );
};
export default Login;
