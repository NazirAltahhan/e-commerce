import logo from './logo.svg';
import './App.css';
import Home from '../src/Pages/Home';
import Navbar from '../src/Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  
    <div className="App">
      
      <Navbar title ='E-commerce'/>
      <Home/>
      <Footer/> 
    </div>
  );
}

export default App;
