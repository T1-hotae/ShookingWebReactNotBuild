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

  const [cartIds, setCartIds] = useState([]);

  const onCart = (id) => {
    const newCartId = id;

    setCartIds((cartId) => [...cartId, newCartId]);
  };

  return (
    <>
      <ProductStateContext.Provider value={{ data, cartIds }}>
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
