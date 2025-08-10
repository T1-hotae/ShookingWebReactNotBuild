import "./ProductCard.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../App";

import Button from "./Button";

const ProductCard = ({
  id,
  name,
  info,
  price,
  img,
  badgeCount,
  setBadgeCount,
  isAdd,
}) => {
  const { onCart } = useContext(ProductContext);
  const [inCart, setInCart] = useState(isAdd);

  const handleAddToCart = () => {
    if (isAdd) {
      alert("해당 상품은 이미 담겨있습니다.");
      return;
    }
    setInCart(true);
    onCart(id);
    alert(`${name}이(가) 카트에 담겼습니다.`);
    setBadgeCount(badgeCount + 1);
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
              text={!inCart ? "담기" : "담김!"}
              backgroundColor={!inCart ? "black" : "gray"}
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
