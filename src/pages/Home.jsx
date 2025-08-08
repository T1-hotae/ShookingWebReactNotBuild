import Header from "../component/Header";
import Info from "../component/Info";
import ProductList from "../component/ProductList";
import { useState } from "react";
import useProduct from "../hooks/useProduct";

const Home = () => {
  const [badgeCount, setBadgeCount] = useState(0);
  const products = useProduct();

  return (
    <>
      <Header badgeCount={badgeCount} />
      <Info title={"신발 상품 목록"} count={products.length} />
      <ProductList
        products={products}
        badgeCount={badgeCount}
        setBadgeCount={setBadgeCount}
      />
    </>
  );
};

export default Home;
