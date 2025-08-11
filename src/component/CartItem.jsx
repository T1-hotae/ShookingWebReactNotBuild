import { useEffect, useState } from "react";
import "./CartItem.css";

const CartItem = ({ product, onPriceChange }) => {
  const [itemImg, itemName, itemPrice] = [
    product.img,
    product.name,
    product.price,
  ];
  const priceFormatted = itemPrice.replace(",", "").replace("원", "");

  const [count, setCount] = useState(1);

  const priceItem = Number(priceFormatted * count);
  useEffect(() => {
    onPriceChange(priceItem);
  }, [priceItem]);

  return (
    <section className="CartItem">
      <div className="item-img">
        <img src={itemImg} />
      </div>
      <div className="item-info">
        <div className="item-text">
          <p className="item-Name">{itemName}</p>
          <p className="item-price">{priceItem.toLocaleString()}</p>
        </div>
        <div className="item-count">
          <button
            className="item-min"
            onClick={() => setCount((c) => Math.max(1, c - 1))}
          >
            -
          </button>
          <div className="item-num">{count}</div>
          <button className="item-add" onClick={() => setCount((c) => c + 1)}>
            +
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
