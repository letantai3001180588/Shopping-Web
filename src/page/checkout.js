import CartPay from "../component/cartPay";
import Payment from "../component/payment";

function Checkout() {
    return (
        <div className="container" style={{marginTop:150}}>
            <div className="row">
                <CartPay/>
                <Payment/>
            </div>
        </div>
    );
}

export default Checkout;