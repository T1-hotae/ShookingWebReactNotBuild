import Header from "../component/Header";
import Info from "../component/Info";
import ProductList from "../component/ProductList";
import { useState, useEffect } from "react";

const Home = () => {
  const [badgeCount, setBadgeCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://productcardapi.vercel.app/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.photo);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header badgeCount={badgeCount} />
      <Info count={products.length} />
      <ProductList
        products={products}
        badgeCount={badgeCount}
        setBadgeCount={setBadgeCount}
      />
    </>
  );
};

export default Home;
