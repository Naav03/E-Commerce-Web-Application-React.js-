import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 150 },
  { id: 3, name: "Product 3", price: 200 }
];

const ProductList = () => (
  <div className="product-list">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;