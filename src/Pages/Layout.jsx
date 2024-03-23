import { Routes, Route } from "react-router-dom";
import SignUp from "./signup";
import Login from "./login";
import Admin from "./Admin";
import Home from "./home";
import AboutUs from './AboutUs';
import Navbar from "../Components/Navbar";
import { useAuth } from "../Context/ContextAuthuntication";
import Profile from "./Profile";
import Cart from "./Cart";
const Layout = () => {
  const { user } = useAuth();
  const name = localStorage.getItem("username");

  return (
    <div>
      <i> { <Navbar title="Great Taste" />}</i>
      <Routes>
        {
          <>
            {name === "admin" ? (
              <Route path="/admin" element={<Admin />}></Route>
            ) : (
              <>
              <Route path="/home" element={<Home />}></Route>
              </>
            )}
            <Route path="/aboutUs" element={<AboutUs />}></Route>
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
