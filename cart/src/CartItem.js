import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// eslint-disable-next-line
class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        // console.log('this.state',this.state);

        // from1
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // or from2
        this.setState((preState) => {
            return {
                qty: preState.qty + 1
            }
        })
    }
    decreaseQuantity = () => {
        // console.log('this.state',this.state);
        this.setState((preState) => (
            {qty: preState.qty? preState.qty-1: 0}
        ))
        // method2 for decreaseQuantity
        // if (qty === 0){
        //     return;
        // }
        // this.setState((preState) => {
        //     return {
        //         qty: preState.qty + 1
        //     }
        // })

    }
    
    render() {
        const {price,title,qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>               
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Button */}
                        <img 
                        alt="increase" className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        alt="decrease" className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={this.decreaseQuantity}
                        />
                        <img 
                        alt="delete" className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
const styles = {
    image: {
        height: 150,
        width: 150,
        borderRadius: 5
    }
}
export default CartItem;