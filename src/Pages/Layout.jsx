import { Routes, Route } from "react-router-dom";
import SignUp from "./signup";
import Login from "./login";
import Admin from "./Admin";
import Home from "./home";
import Navbar from "../Components/Navbar";
import { useAuth } from "../Context/ContextAuthuntication";
import Profile from "./Profile";
import Cart from "./Cart";
const Layout = () => {
  const { user } = useAuth();
  const name = localStorage.getItem("username");

  return (
    <div>
      <i> {name && <Navbar title="Great Taste" />}</i>
      <Routes>
        {
          <>
            {name === "admin" ? (
              <Route path="/admin" element={<Admin />}></Route>
            ) : (
              <Route path="/user" element={<Home />}></Route>
            )}
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </>
        }
      </Routes>
    </div>
  );
};

export default Layout;
