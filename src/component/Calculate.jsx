import "./Calculate.css";

const checkPirce = (price) => {
  return price;
};

const Calculate = () => {
  const productPrice = Number("95000");
  const shippingFee = productPrice < 100000 ? 3000 : 0;

  return (
    <section className="Calculate">
      <div className="ProductPrice">
        <div className="detailAmount">
          <p className="amount-info">상품 금액</p>
          <p className="amount-price">{productPrice} 원</p>
        </div>
        <div className="shippingAmount">
          <p className="amount-info">배송비</p>
          <p className="amount-price">{shippingFee} 원</p>
        </div>
      </div>
      <hr />

      <div className="totalAmount">
        <p className="amount-info">총 금액</p>
        <p className="amount-price">{productPrice + shippingFee} 원</p>
      </div>
      <button className="btn-Amount">결제하기</button>
    </section>
  );
};

export default Calculate;
