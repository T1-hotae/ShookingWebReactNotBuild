import CartItem from "./CartItem";
import Calculate from "./Calculate";
import useProduct from "../hooks/useProduct";
import { useContext, useState } from "react";
import { ProductStateContext } from "../App";

const CartList = () => {
  const { cartIds } = useContext(ProductStateContext);
  const products = useProduct();

  const [totalPrice, setTotalPrice] = useState(0);
  const onPriceChange = (cartId, itemTotal) => {
    setTotalPrice((prevTotal) => {
      return prevTotal + itemTotal;
    });
  };

  return (
    <>
      {cartIds.map((cartId) => {
        const product = products.find((p) => p.id === cartId);
        if (!product) return null;
        return (
          <div key={cartId}>
            <CartItem
              key={cartId}
              product={product}
              onPriceChange={(price) => onPriceChange(cartId, price)}
            />
            <hr />
          </div>
        );
      })}
      <Calculate price={totalPrice} />
    </>
  );
};

export default CartList;
