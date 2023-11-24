import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import products from "./mocks/products.json";
import Product from "./components/product/product";
import Basket from "./components/Basket/Basket";

function App() {
  const [orderedProducts, setOrderedProducts] = useState([]);
  const handleProductSelect = (product) => {
    setOrderedProducts([...orderedProducts, product]);
  };
  const handleProductRemove = (orderedProduct) => {
    setOrderedProducts(
      orderedProducts.filter((product) => product.id !== orderedProduct.id)
    );
  };

  return (
    <>
      <Basket
        orderedProducts={orderedProducts}
        onProductRemove={handleProductRemove}
      />
      <ul>
        {orderedProducts.map((orderedProduct) => (
          <li key={orderedProduct.id}>{orderedProduct.name}</li>
        ))}
      </ul>
      <main>
        <header>
          <h1>Welcome</h1>
        </header>
        <hr />
        <section style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              orderedProducts={orderedProducts}
              onProductSelect={handleProductSelect}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;