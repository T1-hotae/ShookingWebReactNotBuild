import CartItem from "./CartItem";
import Calculate from "./Calculate";
import "./CartList.css";
import useProduct from "../hooks/useProduct";

const CartList = ({ cartInfos }) => {
  const products = useProduct();

  const price = cartInfos
    .map((cartInfo) => cartInfo.price)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="CartList">
      {cartInfos.map((cartInfo) => {
        const product = products.find((p) => p.id === cartInfo.id);
        if (!product) return null;
        return (
          <div key={cartInfo.id}>
            <CartItem key={cartInfo.id} cartItem={product} />
            <hr />
          </div>
        );
      })}
      <Calculate price={price} />
    </div>
  );
};

export default CartList;
