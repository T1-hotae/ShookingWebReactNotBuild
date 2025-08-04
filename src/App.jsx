import "./App.css";
import { useEffect, useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Payment from "./pages/Payment";

function App() {
  const [badgeCount, setBadgeCount] = useState(0);
  const [products, setProducts] = useState([]);

  const ProductContext = createContext();

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
      <ProductContext.Provider value={{ badgeCount, products, setBadgeCount }}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                badgeCount={badgeCount}
                products={products}
                setBadgeCount={setBadgeCount}
              />
            }
          />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </ProductContext.Provider>
    </>
  );
}

export default App;
