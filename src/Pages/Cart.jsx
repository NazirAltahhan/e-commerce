import { useEffect, useState } from "react";
import ProductData from "../mocks/products.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../Components/Cards";

const Cart = () => {
  const [CartItem, setCartItem] = useState();
  const Items = localStorage.getItem("cartId");
  useEffect(() => {
    if (Items) {
      const parsedItems = JSON.parse(Items);
      const GetProduct = () => {
        const Compare = parsedItems.map((itemId) =>
          ProductData.find((e) => e.id === itemId)
        );
        setCartItem(Compare);
      };
      GetProduct();
    } else {
      console.error("No data found in local storage");
    }
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {CartItem?.map((product, i) => (
            <Col key={i}>
              <Cards
                title={product.Name}
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
};

export default Cart;
