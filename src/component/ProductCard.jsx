import "./ProductCard.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext, ProductStateContext } from "../App";

import Button from "./Button";

const ProductCard = ({ id, name, info, price, img }) => {
  const { cartInfos } = useContext(ProductStateContext);
  const { onCart } = useContext(ProductContext);

  const isAdd = cartInfos.some((item) => item.id === id);
  const itemPrice = Number(price.replace(",", "").replace("원", ""));

  const handleAddToCart = () => {
    if (isAdd) {
      alert("해당 상품은 이미 담겨있습니다.");
      return;
    }
    onCart(id, itemPrice);
    alert(`${name}이(가) 카트에 담겼습니다.`);
  };

  const nav = useNavigate();

  return (
    <div className="ProductCard">
      <img src={img} alt="신발 이미지" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{info}</p>
        <p className="product-price">{price}</p>
        <div className="product-btn">
          <div className="btn-add">
            <Button
              text={!isAdd ? "담기" : "담김!"}
              backgroundColor={!isAdd ? "black" : "gray"}
              width={"60"}
              onClick={handleAddToCart}
            />
          </div>
          <div className="btn-buy">
            <Button
              text={"구매"}
              width={"60"}
              onClick={() => nav("/payment")}
              backgroundColor={"yellow"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
