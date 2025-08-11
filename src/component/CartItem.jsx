import { useState, useContext } from "react";
import { ProductContext } from "../App";
import "./CartItem.css";

const CartItem = ({ product }) => {
  const [itemImg, itemName, itemPrice] = [
    product.img,
    product.name,
    product.price,
  ];
  const priceFormatted = itemPrice.replace(",", "").replace("원", "");

  const [totalPrice, setTotalPrice] = useState({
    count: 1,
    price: priceFormatted,
  });

  const priceItem = Number(priceFormatted * totalPrice.count);
  const { onAddPrice } = useContext(ProductContext);

  const onClickUpCount = () => {
    setTotalPrice({
      ...totalPrice,
      count: totalPrice.count + 1,
    });
    onAddPrice(totalPrice.count, totalPrice.price);
  };

  const onClickDownCount = () => {
    if (totalPrice.count > 1) {
      setTotalPrice({
        ...totalPrice,
        count: totalPrice.count - 1,
      });
    }
    onAddPrice(totalPrice);
  };

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
          <button className="item-min" onClick={onClickDownCount}>
            -
          </button>
          <div className="item-num">{totalPrice.count}</div>
          <button className="item-add" onClick={onClickUpCount}>
            +
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
