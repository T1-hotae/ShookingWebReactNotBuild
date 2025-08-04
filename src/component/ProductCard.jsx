import "./ProductCard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <p className="price">{price}</p>
        <div className="btn">
          <button
            className="btnPutIn"
            style={{ background: isAdded ? "gray" : "" }}
            onClick={handleAddToCart}
          >
            {isAdded ? "담김!" : "담기"}
          </button>
          <button className="btnBuy" onClick={() => nav("/payment")}>
            구매
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
