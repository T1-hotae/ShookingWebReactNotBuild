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

  const onCardClick = () => {
    if (cartInfos && cartInfos.length > 0) return nav("/amount");
    else return alert("장바구니가 비어있습니다.");
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
        onClick={onCardClick}
      />
    </>
  );
};

export default Cart;
