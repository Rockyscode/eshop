import React from "react";
import "./Product.css";
import { phone } from "../accets/Images";

function Product({ title, price, rating, image }) {
  return (
    <>
      <div className="product">
        <div className="produt__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <img src={image} alt={title} />
          <button>Add to Basket</button>
        </div>
      </div>
    </>
  );
}

export default Product;
