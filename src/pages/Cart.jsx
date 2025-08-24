import Header from "../component/Header";
import ProductInfo from "../component/ProductInfo";
import CartList from "../component/CartList";
import Button from "../component/Button";
import { useContext } from "react";
import { ProductStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartInfos } = useContext(ProductStateContext);
  const nav = useNavigate();

  const onAmountClick = () => {
    if (cartInfos) {
      return nav("/amount", { replace: true });
    } else {
      alert("상품을 담아주세요");
    }
  };

  return (
    <>
      <Header backBtn={true} />
      <ProductInfo
        title={"장바구니"}
        count={cartInfos.length ? cartInfos.length : 0}
      />
      <CartList cartInfos={cartInfos} />
      <Button
        text={"결제하기"}
        backgroundColor={"yellow"}
        width={"540"}
        onClick={onAmountClick}
      />
    </>
  );
};

export default Cart;
