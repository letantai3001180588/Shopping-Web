import ListItem from "./listItemInCart";
import { useContext } from "react";
import { HandleAllContext } from "../handleAllContext";

function CartPay() {
    const context=useContext(HandleAllContext)
    return (
        <>
            <div className="col-lg-6" >
                <div className="card rounded-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0" onClick={() => context.navigate('/')}>
                                <i className="bi bi-arrow-left-circle-fill me-2"></i>
                                Back ShoeStore 
                            </h5>
                        </div>

                        <h3 className="text-center m-3">List Item</h3>
                        <hr className="my-4"/>

                        <div className="offcanvas-body p-1" style={{minHeight:350+'px',maxHeight:350+'px'}}>
                            <ListItem/>
                        </div>

                        <hr className="my-4"/>
                        <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">$ {context.cart.reduce((sum,item)=>sum+item.data.price*item.amount,0)}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">FREE SHIP</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4 fw-bold">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">$ {context.cart.reduce((sum,item)=>sum+item.data.price*item.amount,0)}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}  
export default CartPay; 