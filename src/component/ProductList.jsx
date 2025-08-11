import "./ProductList.css";
import ProductCard from "./ProductCard";
import { ProductStateContext } from "../App";
import { useContext } from "react";

const ProductList = ({ products, badgeCount, setBadgeCount }) => {
  const { cartIds } = useContext(ProductStateContext);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          {...product}
          badgeCount={badgeCount}
          setBadgeCount={setBadgeCount}
          isAdd={cartIds.includes(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
