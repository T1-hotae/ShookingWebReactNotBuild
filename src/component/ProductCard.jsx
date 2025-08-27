import "./ProductCard.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext, ProductStateContext } from "../App";

import Button from "./Button";

const ProductCard = ({ id, name, info, price, img }) => {
  const nav = useNavigate();

  const { cartInfos } = useContext(ProductStateContext);
  const { onCart, onDeleteCart } = useContext(ProductContext);

  const isAdd = cartInfos.some((item) => item.id === id);
  const itemPrice = Number(price.replace(",", "").replace("원", ""));

  const handleAddToCart = () => {
    if (isAdd) {
      onDeleteCart(id);
      alert(`${name}이(가) 카트에서 제거되었습니다.`);
    } else {
      onCart(id, itemPrice);
      alert(`${name}이(가) 카트에 담겼습니다.`);
    }
  };

  return (
    <div className="ProductCard" onClick={() => nav(`/product/${id}`)}>
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
              onClick={(e) => {
                e.stopPropagation(); // 부모 div로 이벤트 전달 막기
                handleAddToCart();
              }}
            />
          </div>
          <div className="btn-buy">
            <Button
              text={"구매"}
              width={"60"}
              backgroundColor={"yellow"}
              onClick={(e) => {
                e.stopPropagation(); // 부모 onClick 막기
                nav("/payment");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
