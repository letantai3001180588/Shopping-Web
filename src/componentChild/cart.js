// import { useState } from "react";
import { Link } from "react-router-dom";
import ListItem from "./listItemInCart";
import { HandleAllContext } from "../handleAllContext";
import { useContext } from "react";

function Cart({cart,handleTotal}) {    
    const context=useContext(HandleAllContext)

    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false" style={{width:450+'px'}}>
                <div className="offcanvas-header" style={{background:'#f8f9fa'}}>
                    <h3 className="offcanvas-title d-none d-sm-block fw-bold" id="offcanvas">Giỏ hàng</h3>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-1" >
                    <div className=" mb-4 list-card" style={{borderBottomWidth:1+'px',borderBottomStyle:"solid",borderBottomColor:'#dbdbdb',height:80+'%',maxHeight:80+'%',overflowY:'scroll'}}>
                        <ListItem/>
                    </div>

                    <div className="col-md-12 fw-bold d-flex justify-content-between m-2" style={{width:95+'%',fontSize:20+'px'}}>
                        <span>Tổng thanh toán</span>
                        <span>${handleTotal()}</span>
                    </div>
                    
                    <div className="col-12 d-grid mt-2 fw-bold">
                        <button className="btn btn-secondary m-2" onClick={()=>context.handleCheckOut()}>                            
                            <h4>
                                Mua ngay
                            </h4>
                        </button>
                        <button className="btn btn-outline-secondary me-2 ms-2" data-bs-dismiss="offcanvas" aria-label="Close">
                            <h5>
                                Tiếp tục
                            </h5>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}  
export default Cart; 