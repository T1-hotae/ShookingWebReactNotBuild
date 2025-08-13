import Header from "../component/Header";
import Info from "../component/Info";
import ProductList from "../component/ProductList";
import { useState, useContext } from "react";
import { ProductStateContext } from "../App";
import useProduct from "../hooks/useProduct";

const Home = () => {
  const products = useProduct();
  const { cartInfos } = useContext(ProductStateContext);

  return (
    <>
      <Header badgeCount={cartInfos.length} />
      <Info title={"신발 상품 목록"} count={products.length} />
      <ProductList products={products} />
    </>
  );
};

export default Home;
