import CartItem from "./CartItem";
import Calculate from "./Calculate";
import useProduct from "../hooks/useProduct";
import { useContext } from "react";
import { ProductStateContext } from "../App";

const CartList = () => {
  const { cartIds } = useContext(ProductStateContext);
  const products = useProduct();

  return (
    <>
      {cartIds.map((cartId) => {
        const product = products.find((p) => p.id === cartId);
        if (!product) return null;
        return (
          <>
            <CartItem key={cartId} product={product} />
            <hr />
          </>
        );
      })}
      <Calculate />
    </>
  );
};

export default CartList;
