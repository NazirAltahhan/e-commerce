import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import userProfile from "../Assets/Img/user-profile.png";
import adminProfile from "../Assets/Img/admin-profile.png";
import { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const [adress, setAdress] = useState();
  const name = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const type = name === "admin" ? "Admin" : "User";
  const Save = () => {
    localStorage.setItem("adress", adress);
  };
  const ShowAdress = localStorage.getItem("adress");
  const UserAge = localStorage.getItem("age");
  return (
    <>
      <Container>
        <Row>
          <Col>
            <img
              src={name === "admin" ? adminProfile : userProfile}
              alt=""
              style={{
                width: "20rem",
                height: "20rem",
                padding: "2rem",
                marginTop: "5rem",
              }}
            />
          </Col>
          <Col>
            <Card
              style={{ width: "30rem", marginTop: "100px", height: "20rem" }}
              className=" ml-5 mr-4"
            >
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  {name}
                </Card.Title>
                <Card.Text style={{ fontWeight: "bold" }}>
                  Email : {email}
                </Card.Text>
                <Card.Text style={{ fontWeight: "bold" }}>
                  Type : {type}
                </Card.Text>
                <Card.Text style={{ fontWeight: "bold" }}>
                  Adress : {ShowAdress}
                </Card.Text>
                <Card.Text style={{ fontWeight: "bold" }}>
                  Age : {UserAge}
                </Card.Text>
                <Card.Text style={{ fontWeight: "bold" }}>
                  {
                    <InputGroup className="mt-2">
                      <InputGroup.Text id="inputGroup-sizing-default">
                        Adress
                      </InputGroup.Text>
                      <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        id="UserName"
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                      />
                    </InputGroup>
                  }
                </Card.Text>
                <Button variant="info" onClick={() => Save()}>
                  Save
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
