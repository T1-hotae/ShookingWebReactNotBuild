import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ badgeCount, setBadgeCount }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (isAdded) {
      alert("해당 상품은 이미 담겨있습니다.");
      return;
    }
    setIsAdded(true);
    alert("카트에 담겼습니다.");
    setBadgeCount(badgeCount + 1);
  };

  return (
    <div className="card">
      <img
        src="https://media-api-theres.theres.co/static/image/1713425229658/wB67tfbDF5D61EG8Ypug/T4CJii8nf5-w4FcmDTyM"
        alt="신발 이미지"
      />
      <div className="product-info">
        <h3>브랜드A</h3>
        <p>편안하고 착용감이 좋은 신발</p>
        <p className="price">35,000원</p>
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
