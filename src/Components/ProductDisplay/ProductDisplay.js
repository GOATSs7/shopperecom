import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="productimg" />
          <img src={product.image} alt="productimg" />
          <img src={product.image} alt="productimg" />
          <img src={product.image} alt="productimg" />
        </div>
        <div className="productdisplay-image">
          <img
            src={product.image}
            alt="mainimage"
            className="productdisplay-main-img"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(123)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {" "}
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            {" "}
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          maxime eos labore a deserunt illo voluptatum aperiam facere iusto
          ducimus.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category :</span> Women ,T-Shirt ,CropTop
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
