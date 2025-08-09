import Header from "../component/Header";
import Info from "../component/Info";
import CartList from "../component/CartList";
import Calculate from "../component/Calculate";

const Cart = () => {
  const cartCount = 3;
  return (
    <>
      <Header backBtn={true} />
      <Info title={"장바구니"} count={cartCount} />
      <CartList />
      <Calculate />
    </>
  );
};

export default Cart;
