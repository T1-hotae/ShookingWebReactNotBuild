import "./ProductList.css";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
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
