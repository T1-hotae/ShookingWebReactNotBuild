import "./CartItem.css";

const CartItem = () => {
  const [itemImg, itemName, itemPrice] = ["img", "나이키", "12,000원"];
  return (
    <section className="CartItem">
      <div className="item-img">
        <img src="https://m.lemouton.co.kr/lemouton/main/230904/main-03.jpg" />
      </div>
      <div className="item-info">
        <div className="item-text">
          <p className="item-Name">{itemName}</p>
          <p className="item-price">{itemPrice}</p>
        </div>
        <div className="item-count">
          <div className="item-min">-</div>
          <div className="item-num">1</div>
          <div className="item-add">+</div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
