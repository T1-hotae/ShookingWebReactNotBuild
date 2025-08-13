import { useContext, useReducer, useEffect } from "react";
import { ProductContext } from "../App";
import "./CartItem.css";

const initialState = {
  count: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: Math.max(1, state.count - 1) };
  }
}

const CartItem = ({ cartItem }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { onCart } = useContext(ProductContext);

  const priceFormatted = cartItem.price.replace(",", "").replace("원", "");
  const priceItem = Number(priceFormatted * state.count);

  const onPlus = () => {
    dispatch({
      type: "increase",
    });
  };

  const onSub = () => {
    dispatch({
      type: "decrease",
    });
  };
  useEffect(() => {
    onCart(cartItem.id, priceItem);
  }, [state]);

  return (
    <section className="CartItem">
      <div className="item-img">
        <img src={cartItem.img} />
      </div>
      <div className="item-info">
        <div className="item-text">
          <p className="item-Name">{cartItem.name}</p>
          <p className="item-price">{priceItem.toLocaleString()}</p>
        </div>
        <div className="item-count">
          <button className="item-min" onClick={onSub}>
            -
          </button>
          <div className="item-num">{state.count}</div>
          <button className="item-add" onClick={onPlus}>
            +
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
