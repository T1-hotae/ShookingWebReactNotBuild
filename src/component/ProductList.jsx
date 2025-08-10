import "./ProductList.css";
import ProductCard from "./ProductCard";

const ProductList = ({ products, badgeCount, setBadgeCount }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          {...product}
          badgeCount={badgeCount}
          setBadgeCount={setBadgeCount}
        />
      ))}
    </div>
  );
};

export default ProductList;
