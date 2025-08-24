import Header from "../component/Header";
import ProductList from "../component/ProductList";
import ProductInfo from "../component/ProductInfo";
import { useContext } from "react";
import { ProductStateContext } from "../App";
import useProduct from "../hooks/useProduct";

const Home = () => {
  const products = useProduct();
  const { cartInfos } = useContext(ProductStateContext);

  return (
    <>
      <Header badgeCount={cartInfos.length} backBtn={false} option={true} />
      <ProductInfo title={"신발 상품 목록"} count={products.length} />
      <ProductList products={products} />
    </>
  );
};

export default Home;
