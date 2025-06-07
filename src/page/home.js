import { useContext} from "react";
import React from "react";
import { Suspense } from "react";
import Cart from "../component/cart";
import Caurosel from "../component/caurosel";
import Footer from "../component/footer";
import Nav from "../component/Nav";
import { HandleAllContext } from "../handleAllContext";
import Commitment from "../component/commitment";
import { ToastContainer } from "react-toastify";
import SkeletonProduct from "../component/skeletonProduct";
import SortProduct from "../component/sortProduct";
import Order from "../component/order";

const ListProduct = React.lazy(() =>{
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../component/listProduct")), 3000);
  });
});


function Home() {
  const context=useContext(HandleAllContext)
  
  return (
    <div className="App postion-relative">
      <Nav cartLenght={context.cart.length}/>

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
