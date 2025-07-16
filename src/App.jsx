import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Info from "./component/Info";
import ProductList from "./component/ProductList";
import ProductCard from "./component/ProductCard";

function App() {
  const [badgeCount, setBadgeCount] = useState(0);

  return (
    <>
      <Header badgeCount={badgeCount} />
      <Info count={6} />
      <ProductList>
        <ProductCard badgeCount={badgeCount} setBadgeCount={setBadgeCount} />
        <ProductCard badgeCount={badgeCount} setBadgeCount={setBadgeCount} />
        <ProductCard badgeCount={badgeCount} setBadgeCount={setBadgeCount} />
      </ProductList>
    </>
  );
}

export default App;
