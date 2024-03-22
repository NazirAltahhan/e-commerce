import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles/login.css";
import Button from "react-bootstrap/Button";
import { login, useAuth } from "../Context/ContextAuthuntication";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
            <div className="login-tx">
              <h3><i>Enjoy great shopping</i> </h3>
            </div>

            <div className="login-form">
              <Row>
                <Col>
                  <InputGroup className="mt-2">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      {" "}
                      UserName
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      id="UserName"
                      value={UserName}
                      onChange={(e) => setUserName(e.target.value)}
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
                <Button variant="secondary" onClick={() => LoginApp()}>
                  {" "}
                  Log In{" "}
                </Button>
              </Row>
            </div>
            <div className="login-tx">
              <h6>Or You Don't Have an Account? </h6>
              <a href="/signUp">Rigester Now </a>
            </div>
          </Container>
        </form>
      </div>
    </>
  );
};
export default Login;
