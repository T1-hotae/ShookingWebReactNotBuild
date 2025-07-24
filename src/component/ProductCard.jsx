import { useState } from "react";
import "./ProductCard.css";
import CardNumberInput from "./CardNumberInput";

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

  const onClickCardNum = () => {
    <CardNumberInput />; // 라우터를 배워야함.
  };

  return (
    <div className="card">
      <img src={img} alt="신발 이미지" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{info}</p>
        <p className="price">{price}</p>
        <div className="btn">
          <button
            className="btnPutIn"
            style={{ background: isAdded ? "gray" : "" }}
            onClick={handleAddToCart}
          >
            {isAdded ? "담김!" : "담기"}
          </button>
          <button className="btnBuy" onClick={onClickCardNum}>
            구매
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
