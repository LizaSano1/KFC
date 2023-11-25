import React, { useState } from "react";
import "./ProductModal.scss";

const ProductModal = (props) => {
  const { onClose, product, onAddToBasket } = props;
  const [quantity, setQuantity] = useState(1);

  const handleAddToBasket = () => {
    onAddToBasket(product, quantity);
    onClose();
  };

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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
          <div>
            <label htmlFor="quantity">Ilość: </label>
            <button onClick={handleDecrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrementQuantity}>+</button>
          </div>
          <button onClick={handleAddToBasket}>Dodaj do koszyka</button>
        </div>
      )}
    </div>
  );
};

export default ProductModal;
