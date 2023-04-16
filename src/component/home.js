import { useContext} from "react";
import React from "react";
import { Suspense } from "react";
import Cart from "../componentChild/cart";
import Caurosel from "../componentChild/caurosel";
import Footer from "../componentChild/footer";
import Header from "../componentChild/header";
import Chat from "../componentChild/chat";
import { HandleAllContext } from "../handleAllContext";
import Commitment from "../componentChild/commitment";
import { ToastContainer } from "react-toastify";
import SkeletonProduct from "../componentChild/skeletonProduct";
import SortProduct from "../componentChild/sortProduct";
import Order from "../componentChild/order";

const ListProduct = React.lazy(() =>{
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../componentChild/listProduct")), 3000);
  });
});


function Home() {
  const context=useContext(HandleAllContext)
  
  return (
    <div className="App postion-relative">
      <Header cartLenght={context.cart.length}/>

      <Caurosel/>
      <Commitment/>
      <SortProduct/>

      <Suspense fallback={<SkeletonProduct/>}>
          <ListProduct listProduct={context.listProduct} handleAddToCart={context.handleAddToCart}/>
      </Suspense>

      <Footer/>

      <Order/>
      
      <Cart cart={context.cart} handleChangeAmount={context.handleChangeAmount} handleDeleteItem={context.handleDeleteItem} handleTotal={context.handleTotal}/>
      {/* <Chat/> */}

      <button className="btn btn-outline-secondary" type="button" onClick={()=>window.scrollTo(0,0)} style={{width:40,height:40,position:'fixed',bottom:80,right:30,borderRadius:50+'%'}}>
        <i className="bi bi-arrow-up"></i>
      </button>
      <ToastContainer />

    </div>
  );
}

export default Home;
