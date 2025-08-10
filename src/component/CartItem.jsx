import { useState } from "react";
import "./CartItem.css";

const CartItem = () => {
  const [itemImg, itemName, itemPrice] = ["img", "나이키", "12,000원"];

  const [count, setCount] = useState(1);

  return (
    <section className="CartItem">
      <div className="item-img">
        <img src="https://m.lemouton.co.kr/lemouton/main/230904/main-03.jpg" />
      </div>
      <div className="item-info">
        <div className="item-text">
          <p className="item-Name">{itemName}</p>
          <p className="item-price">{itemPrice}</p>
        </div>
        <div className="item-count">
          <button
            className="item-min"
            onClick={() => setCount(count !== 0 ? count - 1 : count)}
          >
            -
          </button>
          <div className="item-num">{count}</div>
          <button className="item-add" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
