import { HandleAllContext } from "../handleAllContext";
import { useContext } from "react";

function Payment() {
    const context=useContext(HandleAllContext)

    return (
        <>
            <div className="col-lg-6">
                <div className="card rounded-3">
                    <div className="card-body">
                        <div className="mb-4">
                            <div className="mb-0 text-center fs-2">Payment</div>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Email:</span>
                            <input type="text" className="form-control" placeholder="Tai@gmail.com" disabled/>
                        </div>

                        <p className="small mb-2">
                            Card type: 
                            <span>visa, paypal</span>
                        </p>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Adress</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Country..." aria-describedby="emailHelp"/>
                        </div>

                        <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                                <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                                <input type="text" id="typeName" className="form-control" siez="17"
                                    placeholder="Cardholder's Name" />
                            </div>

                            <div className="form-outline form-white mb-4">
                                <label className="form-label" htmlFor="typeText">Card Number</label>
                                <input type="text" id="typeText" className="form-control" siez="17"
                                    placeholder="1234 5678 9012 3457" minLength={19} maxLength={19} />
                            </div>

                            <div className="row mb-4">
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="typeExp">Expiration</label>
                                <div className="form-outline form-white">
                                    <input type="text" id="typeExp" className="form-control" placeholder="MM/YYYY" size="7" minLength={7} maxLength={7} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-outline form-white">
                                    <label className="form-label" htmlFor="typeText">Cvv</label>
                                    <input type="password" id="typeText" className="form-control"
                                        placeholder="&#9679;&#9679;&#9679;" size="1" minLength={3} maxLength={3} />
                                </div>
                            </div>
                            </div>

                        </form>

                        <hr className="my-4"/>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Billing address same as shipping</label>
                        </div>

                        <div className="col-12 d-grid mb-1">
                            <button type="button" className="btn btn-primary btn-block btn-lg" onClick={()=>context.handleOrderProduct()}>
                                <span>Checkout</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}  
export default Payment; 