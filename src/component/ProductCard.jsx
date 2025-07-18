import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ name, info, price, img, badgeCount, setBadgeCount }) => {
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

  return (
    <div className="card">
      <img src={img} alt="신발 이미지" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{info}</p>
        <p className="price">{price}</p>
        <button
          style={{ background: isAdded ? "gray" : "" }}
          onClick={handleAddToCart}
        >
          {isAdded ? "담김!" : "담기"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
