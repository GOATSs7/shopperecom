import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { all_products, cartItems, removeFromCart } = useContext(ShopContext);

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
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="cartitem-format">
              <img src={e.image} alt="img" className="cartitems-product-icon" />
              <p>{e.name} </p>
              <p>${e.new_price} </p>
              <button className="cartitems-quantity">{cartItems[e.id]} </button>
              <p>{e.new_price * cartItems[e.id]} </p>
              <img
                src={remove_icon}
                alt="img"
                onClick={() => {
                  removeFromCart(e.id);
                }}
              />
            </div>
          );
        }
        <hr />;
      })}
    </div>
  );
};

export default CartItems;
