import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Routes } from "react-router-dom";
import Product from './component/product';
import Login from './component/login';
import Checkout from './component/checkout';
import Admin from './component/admin';


function App() {
  return (
    <>
      <Routes>
            <Route path="/" exact element={<Product/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/admin" element={<Admin/>} />
            {/* <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound}/> */}
      </Routes>

    
    </>
  );
}

export default App;
