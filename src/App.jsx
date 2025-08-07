import "./App.css";
import { useState, createContext, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Payment from "./pages/Payment";
import CardInfo from "./pages/CardInfo";

export const ProductStateContext = createContext();
export const ProductContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const idRef = useRef(0);

  const onCreate = (cardNum, date, name, cvc, pwd1, pwd2) => {
    const newCard = {
      id: idRef.current++,
      cardNum,
      date,
      name,
      cvc,
      pwd1,
      pwd2,
    };
    setData((prev) => [...prev, newCard]);
  };

  return (
    <>
      <ProductStateContext.Provider value={data}>
        <ProductContext.Provider value={onCreate}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/cardinfo" element={<CardInfo />} />
          </Routes>
        </ProductContext.Provider>
      </ProductStateContext.Provider>
    </>
  );
}

export default App;
