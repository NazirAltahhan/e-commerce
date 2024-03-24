import { useEffect, useState } from "react";
import ProductData from "../mocks/products.json";
import Table from "react-bootstrap/Table";

const Cart = () => {
  const [CartItems, setCartItems] = useState([]);
  const Items = localStorage.getItem("cartId");
  const [total, setTotal] = useState(0);
  const [Quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (Items) {
      const parsedItems = JSON.parse(Items);
      const GetProduct = () => {
        const products = parsedItems.map((itemId) =>
          ProductData.find((e) => e.id === itemId)
        );
        setCartItems(products);

        // Calculate total price
        const totalPrice = products.reduce((acc, currProduct) => {
          return acc + currProduct.Price;
        }, 0);
        setTotal(totalPrice);
      };
      GetProduct();
    } else {
      console.error("No data found in local storage");
    }
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Product Price</th>
          </tr>
        </thead>
        {CartItems.map((product, i) => (
          <tbody key={i}>
            <tr>
              <td>{product.Name}</td>
              <td>{Quantity}</td>
              <td>{product.Price}</td>
            </tr>
          </tbody>
        ))}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{total}</td>
        </tr>
      </Table>
    </div>
  );
};

export default Cart;
