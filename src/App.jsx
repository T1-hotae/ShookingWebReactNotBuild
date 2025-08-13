import "./App.css";
import { useState, createContext, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Payment from "./pages/Payment";
import CardInfo from "./pages/CardInfo";
import Cart from "./pages/Cart";

export const ProductStateContext = createContext();
export const ProductContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const idRef = useRef(0);

  const onCreate = (cardNum, expiry, name, cvc, pwd1, pwd2) => {
    const newCard = {
      id: idRef.current++,
      cardNum,
      expiry,
      name,
      cvc,
      pwd1,
      pwd2,
    };
    setData((prev) => [...prev, newCard]);
  };

  const [cartInfos, setCartInfos] = useState([]);

  const onCart = (id, price = 0) => {
    setCartInfos((prevItems) => {
      const exists = prevItems.some((item) => item.id === id);
      if (exists) {
        // 이미 있으면 price 업데이트
        return prevItems.map((item) =>
          item.id === id ? { ...item, price: price } : item
        );
      }

      // 없으면 새 아이템 추가 (count 기본 1)
      return [...prevItems, { id, price }];
    });
  };

  return (
    <>
      <ProductStateContext.Provider value={{ data, cartInfos }}>
        <ProductContext.Provider value={{ onCreate, onCart }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/cardinfo" element={<CardInfo />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ProductContext.Provider>
      </ProductStateContext.Provider>
    </>
  );
}

export default App;
