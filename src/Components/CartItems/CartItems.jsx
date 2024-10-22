import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";

function CartItems() {

    const {getTotalCartAmt, all_product, cartItems, removeFromCart} = useContext(ShopContext);

    return (
      <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />

        {all_product.map((e) => {
            if(cartItems[e.id] > 0) {

                return <div>

                <div className="cartitems-format cartitems-format-main">
                    <img className="carticon-product-icon" src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cartitems-quantity">{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <div className="cartitems-remove-icon" onClick={() => {removeFromCart(e.id)}}>❌</div>
                </div>
                <hr />
            </div>
            }
            return null;
        })}

        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p className="tag-price1">Subtotal</p>
                        <p className="amt-price">${getTotalCartAmt()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p className="tag-price">Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3 className="tag-price1">Total  </h3>
                        <h3>   ${getTotalCartAmt()}</h3>
                    </div>
                </div>

                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder="promo code"/>
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>

    </div>
    )
  }
  export default CartItems;