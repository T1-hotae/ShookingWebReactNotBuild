import "./ProductList.css";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="productList">
      <div className="productListWrap">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
