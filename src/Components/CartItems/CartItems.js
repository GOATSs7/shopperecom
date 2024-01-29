import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { all_products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />
      {all_products.map((product) => {
        const quantity = cartItems[product.id];
        if (quantity > 0) {
          return (
            <div
              className="cartitem-format cartitems-format-main"
              key={product.id}
            >
              <img
                src={product.image}
                alt="Product"
                className="cartitems-product-icon"
              />
              <p>{product.name}</p>
              <p>${product.new_price}</p>
              <button className="cartitems-quantity">{quantity}</button>
              <p>${product.new_price * quantity}</p>
              <img
                className="cartitems-remove-icon"
                src={remove_icon}
                alt="Remove"
                onClick={() => {
                  removeFromCart(product.id);
                }}
              />
            </div>
          );
        }
        return null; // To satisfy React's requirement of returning a single JSX element or null
      })}
      <hr />
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()} </p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
              <hr />
            </div>
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()} </h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <div className="cartitems-promocode">
              <p> If you have promocode ,enter here </p>
              <div className="cartitems-promobox">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
