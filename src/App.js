import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Admin from "./Pages/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import SignUp from "./Pages/signup";
import { AuthProvider } from "./Context/ContextAuthuntication";
import { useAuth } from "../src/Context/ContextAuthuntication";
import React from "react";
import Layout from "./Pages/Layout";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
