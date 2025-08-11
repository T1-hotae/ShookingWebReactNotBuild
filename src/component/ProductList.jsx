import "./ProductList.css";
import ProductCard from "./ProductCard";
import { ProductStateContext } from "../App";
import { useContext } from "react";

const ProductList = ({ products }) => {
  const { cartIds } = useContext(ProductStateContext);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          isAdd={cartIds.includes(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
