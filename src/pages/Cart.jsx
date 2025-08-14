import Header from "../component/Header";
import ProductInfo from "../component/ProductInfo";
import CartList from "../component/CartList";
import Button from "../component/Button";
import { useContext } from "react";
import { ProductStateContext } from "../App";

const Cart = () => {
  const { cartInfos } = useContext(ProductStateContext);

  return (
    <>
      <Header backBtn={true} />
      <ProductInfo
        title={"장바구니"}
        count={cartInfos.length ? cartInfos.length : 0}
      />
      <CartList cartInfos={cartInfos} />
      <Button text={"결제하기"} backgroundColor={"yellow"} width={"540"} />
    </>
  );
};

export default Cart;
