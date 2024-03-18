import Cards from "../Components/Cards";
import product2 from "../Assets/Images/2.jpg";
import product3 from "../Assets/Images/3.webp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductData from "../mocks/products.json";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [prices, setPrices] = useState([]);
  const [Ids, seIds] = useState([]);
  const navigate = useNavigate();
  const handleCart = (id, Cart_price) => {
    seIds((prevIds) => [...prevIds, id]);
    setPrices((prevPrices) => [...prevPrices, Cart_price]);
    let Count = prices.reduce((sum, price) => sum + price, Cart_price);
    localStorage.setItem("count", Count);
  };
  useEffect(() => {
    localStorage.setItem("cartId", JSON.stringify(Ids));
  }, [Ids]);

  const CartNumber = localStorage.getItem("count");
  return (
    <div>
      <Col>
        <span style={{ marginLeft: "38px", color: "red", fontWeight: "bold" }}>
          {CartNumber}$
        </span>
        <FontAwesomeIcon
          icon={faCartShopping}
          onClick={() => navigate("/cart")}
          style={{ fontSize: "2rem", marginTop: "10px" }}
          className="mr-5"
        ></FontAwesomeIcon>
      </Col>

      <Container>
        <Row>
          {ProductData.map((product, i) => (
            <Col key={i}>
              <Cards
                title={product.Name}
                onClick={() => handleCart(product.id, product.Price)}
                show="Add To Cart"
                src={require(`../Assets/Images/${product.Picture}`)}
                description={product.Description}
                Quatntity={product.Quatntity}
                Price={product.Price}
              ></Cards>
            </Col>
          ))}
        </Row>
        <div></div>
      </Container>
    </div>
  );
}

export default Home;
