import "./App.css";
import { useEffect, useState, createContext, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Payment from "./pages/Payment";
import CardInfo from "./pages/CardInfo";

function App() {
  const [data, setData] = useState([]);
  const idRef = useRef(0);

  const ProductContext = createContext();

  const onCreate = (id, cardNum, date, name, cvc, pwd1, pwd2) => {
    setData({
      id: idRef.current++,
      cardNum,
      date,
      name,
      cvc,
      pwd1,
      pwd2,
    });
  };

  return (
    <>
      <ProductContext.Provider value={{ onCreate }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cardinfo" element={<CardInfo />} />
        </Routes>
      </ProductContext.Provider>
    </>
  );
}

export default App;
