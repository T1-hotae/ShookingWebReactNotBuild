import Header from "../component/Header";
import Info from "../component/Info";
import CartList from "../component/CartList";
import Button from "../component/Button";
import { useContext } from "react";
import { ProductStateContext } from "../App";

const Cart = () => {
  const { cartInfos } = useContext(ProductStateContext);

  return (
    <>
      <Header backBtn={true} />
      <Info
        title={"장바구니"}
        count={cartInfos.length ? cartInfos.length : 0}
      />
      <CartList cartInfos={cartInfos} />
      <Button text={"결제하기"} backgroundColor={"yellow"} width={"540"} />
    </>
  );
};

export default Cart;
