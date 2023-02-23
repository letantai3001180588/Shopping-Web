import { useNavigate } from "react-router-dom";
import ListItem from "./listItemInCart";

function CartPay() {
    const navigate=useNavigate();
    return (
        <>
            <div className="col-lg-6" >
                <div className="card rounded-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0" onClick={() => navigate(-1)}>
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
                            <p className="mb-2">$4798.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4 fw-bold">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">$4818.00</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}  
export default CartPay; 