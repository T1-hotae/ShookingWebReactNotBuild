import "./ProductList.css";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ProductList = ({ products }) => {
  const nav = useNavigate();
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
