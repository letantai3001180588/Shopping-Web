import CartPay from "../componentChild/cartPay";
import Payment from "../componentChild/payment";

function Checkout() {
    return (
        <div className="container mt-5">
            <div className="row">
                <CartPay/>
                <Payment/>
            </div>
        </div>
    );
}

export default Checkout;