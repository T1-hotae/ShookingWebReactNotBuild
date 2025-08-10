import "./ProductCard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

const ProductCard = ({
  id,
  name,
  info,
  price,
  img,
  badgeCount,
  setBadgeCount,
}) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (isAdded) {
      alert("해당 상품은 이미 담겨있습니다.");
      return;
    }
    setIsAdded(true);
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
              text={isAdded ? "담김!" : "담기"}
              backgroundColor={isAdded ? "gray" : "black"}
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
