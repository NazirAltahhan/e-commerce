import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cards = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="mt-3 ml-5 mr-4">
        <Card.Img variant="top" src={props.src} style={{ height: "300px" }} />
        <Card.Body>
          <Card.Title> {props.title}</Card.Title>
          <Card.Text
            style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}
          >
            Description : {props.description}
          </Card.Text>
          <Card.Text style={{ fontWeight: "bold" }}>
            Quatntity : {props.Quatntity}
          </Card.Text>
          <Card.Text style={{ color: "red" }}>Price: {props.Price}</Card.Text>
          <Button variant="primary" onClick={props.onClick}>
            {" "}
            {props.show}{" "}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
