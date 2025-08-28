import { useContext, useReducer, useEffect } from "react";
import { ProductContext, ProductStateContext } from "../App";
import "./CartItem.css";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return Math.max(1, state - 1);
    default:
      return state;
  }
}

const CartItem = ({ cartItem, count }) => {
  const [state, dispatch] = useReducer(reducer, count);
  const { onCart } = useContext(ProductContext);

  const priceFormatted = cartItem.price.replace(",", "").replace("원", "");
  const itemPrice = Number(priceFormatted * state);

  useEffect(() => {
    onCart(cartItem.id, itemPrice);
  }, [state]);

  return (
    <section className="CartItem">
      <div className="item-img">
        <img src={cartItem.img} />
      </div>
      <div className="item-info">
        <div className="item-text">
          <p className="item-Name">{cartItem.name}</p>
          <p className="item-price">{itemPrice.toLocaleString()}</p>
        </div>
        <div className="item-count">
          <button
            className="item-min"
            onClick={() => dispatch({ type: "decrease" })}
          >
            -
          </button>
          <div className="item-num">{state}</div>
          <button
            className="item-add"
            onClick={() => dispatch({ type: "increase" })}
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
