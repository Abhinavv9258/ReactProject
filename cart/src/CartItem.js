import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// eslint-disable-next-line
class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    {/* <img/> */}
                    <h1>helllo</h1>
                </div>               
                <div className="right-block">
                    <div>Phone</div>
                    <div>Rs 999</div>
                    <div>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* Button */}
                    </div>
                </div>
            </div>
        );
    }
}
export default CartItem;