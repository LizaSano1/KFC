import "./Product.scss";

const Product = (props) => {
  const { product, orderedProducts, onProductSelect } = props;
  const { name, price, description, imageUrl } = product;

  const handleButtonClick = () => {
    onProductSelect(product);
  };

  const isOrdered = orderedProducts.some(
    (orderedProduct) => orderedProduct.id === product.id
  );

  const orderCount = orderedProducts.filter(
    (orderedProduct) => orderedProduct.id === product.id
  ).length;

  return (
    <article
      className="product"
      style={{
        borderColor: isOrdered ? "#8ea604" : "transparent",
      }}
    >
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <header>
          <h4>{name}</h4>
          <p>{description}</p>
        </header>
        <footer>
          <strong>{price}</strong>
          <button onClick={handleButtonClick}
            style={
              isOrdered
                ? {
                    color: "white",
                    background: "#8ea604",
                    fontSize: "16px",
                  }
                : {}
            }
          >
            {isOrdered ? orderCount : "+"}
          </button>
        </footer>
      </div>
    </article>
  );
};

export default Product;
