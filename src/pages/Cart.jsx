import Header from "../component/Header";
import Info from "../component/Info";
import CartList from "../component/CartList";
import Calculate from "../component/Calculate";
import Button from "../component/Button";

const Cart = () => {
  const cartCount = 3;
  return (
    <>
      <Header backBtn={true} />
      <Info title={"장바구니"} count={cartCount} />
      <CartList />
      <Calculate />
      <Button text={"결제하기"} backgroundColor={"yellow"} width={"540"} />
    </>
  );
};

export default Cart;
