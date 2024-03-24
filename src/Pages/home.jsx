import Cards from "../Components/Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductData from "../mocks/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [prices, setPrices] = useState([]);
  const [Ids, setIds] = useState([]);
  const navigate = useNavigate();

  const handleCart = (id, Cart_price) => {
    setIds((prevIds) => [...prevIds, id]);
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
      <Row>
        <span>
          <FontAwesomeIcon
            icon={faCartShopping}
            onClick={() => navigate("/cart")}
            style={{
              fontSize: "1.5rem",
              marginTop: "10px",
              marginLeft: "10px",
            }}
            className="mr-5"
          ></FontAwesomeIcon>
          <span
            style={{
              marginLeft: "10px",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {CartNumber}$
          </span>
        </span>
        <span>
          <h2 className="page-title">List of cakes</h2>
        </span>
      </Row>

      <Container>
        <Row>
          {ProductData.map((product, i) => (
            <Col key={i}>
              <Cards
                title={product.Name}
                onClick={() => handleCart(product.id, product.Price)}
                show="Add To Cart"
                src={require(`../Assets/Img/${product.Picture}`)}
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
