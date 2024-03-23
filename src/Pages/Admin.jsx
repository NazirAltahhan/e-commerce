import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import React from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Card } from "react-bootstrap";
import ProductData from "../mocks/products.json";
const Admin = () => {
  const [Modalshow, setModalShow] = useState(false);
  const [DeleteModalshow, setDeleteModalShow] = useState(false);
  const [EditModalshow, setEditModalShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [Name, setName] = useState(null);

  const showEditModal = (product) => {
    setSelectedProduct(product);
    setEditModalShow(true);
  };

  const Showmodal = () => {
    setModalShow(true);
  };
  const Closemodal = () => {
    setModalShow(false);
  };

  const ShowDeletemodal = () => {
    setDeleteModalShow(true);
  };
  const CloseDeletemodal = () => {
    setDeleteModalShow(false);
  };
  const handleChange = (e) => {
    setSelectedProduct((prv) => ({
      ...prv,
      Name: e.target.value,
      Description: e.target.value,
      Quatntity: e.target.value,
      Price: e.target.value,
    }));
    setSelectedProduct((prv) => console.log(prv));
  };
  return (
    <>
      <div className="mt-3 mb-3" style={{paddingLeft:"10px"}} >
        <Button variant="info" onClick={Showmodal}>
          Add Product
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        {ProductData.map((product, i) => (
          <tbody key={i}>
            <td>{product.Name}</td>
            <td>{product.Description}</td>
            <td>{product.Price}</td>
            <td>{product.Quatntity}</td>
            <td>
              {" "}
              <FontAwesomeIcon
                icon={faTrashAlt}
                style={{ gap: "10px", color: "red" }}
                onClick={ShowDeletemodal}
              ></FontAwesomeIcon>{" "}
              <>/</>
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => showEditModal(product)}
                style={{color:"green"}}
              ></FontAwesomeIcon>{" "}
            </td>
          </tbody>
        ))}
      </Table>

      <Modal onHide={Closemodal} show={Modalshow}>
        <Modal.Header closeButton>Add Product</Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <InputGroup className="mt-2">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Name
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e) => setName(e.target.value)}
                    value={Name}
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mt-2">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Description
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="mt-2">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Price
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mt-2">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Quantity
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Closemodal}>
            Close
          </Button>
          <Button variant="dark">Save Changes</Button>
        </Modal.Footer>
      </Modal>

      <Modal onHide={CloseDeletemodal} show={DeleteModalshow}>
        <Modal.Header closeButton> Delete Product</Modal.Header>
        <Modal.Body>
          <h5>Do You Want To Delete This Product? </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={CloseDeletemodal}>
            Close
          </Button>
          <Button variant="dark"> Delete Product</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        onHide={() => setEditModalShow(false)}
        show={EditModalshow}
        size="lg"
      >
        <Modal.Header closeButton> Edit Product</Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <InputGroup className="mt-2">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Name
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    value={selectedProduct?.Name}
                    aria-describedby="inputGroup-sizing-default"
                    id="Name"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mt-2">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Description
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    value={selectedProduct?.Description}
                    aria-describedby="inputGroup-sizing"
                    id="Description"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="mt-2">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    {" "}
                    Price
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    value={selectedProduct?.Price}
                    aria-describedby="inputGroup-sizing-default"
                    id="Price"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mt-2">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    {" "}
                    Quantity
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    value={selectedProduct?.Quatntity}
                    aria-describedby="inputGroup-sizing-default"
                    id="Quantity"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditModalShow(false)}>
            Close
          </Button>
          <Button variant="dark"> Edit Product</Button>
        </Modal.Footer>
      </Modal>

      <Card></Card>
    </>
  );
};

export default Admin;
