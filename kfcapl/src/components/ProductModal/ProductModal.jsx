import React, { useState } from "react";
import "./ProductModal.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const ProductModal = (props) => {
  const { onClose, product, onAddToBasket } = props;
  const [quantity, setQuantity] = useState(product.quantity || 1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToBasket = () => {
    onAddToBasket(product, quantity);
    onClose();
  };

  const handleIncrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleToggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div className="product-modal">
      <button className="close-button" onClick={onClose}>
        &#10006;
      </button>
      {product && (
        <div>
          <div className="favorite-button" onClick={handleToggleFavorite}>
            {isFavorite ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
          </div>
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>{product.price}</h3>
          <div>
            <label htmlFor="quantity">Ilość:</label>
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
