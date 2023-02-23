// import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../componentChild/cart";
import Caurosel from "../componentChild/caurosel";
import Footer from "../componentChild/footer";
import Header from "../componentChild/header";
import ListProduct from "../componentChild/listProduct";
import { HandleAllContext } from "../handleAllContext";

function Product() {

  const context=useContext(HandleAllContext)
  
  return (
    <div className="App">
      <Header cartLenght={context.cart.length}/>
      <Caurosel/>
      <ListProduct listProduct={context.listProduct} handleAddToCart={context.handleAddToCart}/>
      <Footer/>

      <Cart cart={context.cart} handleChangeAmount={context.handleChangeAmount} handleDeleteItem={context.handleDeleteItem} handleTotal={context.handleTotal}/>
      
    </div>
  );
}

export default Product;
