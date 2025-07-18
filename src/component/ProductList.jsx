import "./ProductList.css";
import ProductCard from "./ProductCard";

const ProductList = ({ products, badgeCount, setBadgeCount }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          name={product.name}
          info={product.info}
          price={product.price}
          img={product.img}
          badgeCount={badgeCount}
          setBadgeCount={setBadgeCount}
        />
      ))}
    </div>
  );
};

export default ProductList;
