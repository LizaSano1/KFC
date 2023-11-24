import { useState } from "react";
import "./ProductModal.scss";

const ProductModal = (props) => {
  const { onClose, product } = props;

  return (
    <div className="product-modal">
      <button className="close-button" onClick={onClose}>
        &#10006;
      </button>
      {product && (
        <div>
          <img src={product.imageUrl}></img>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductModal;
