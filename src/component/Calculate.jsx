import "./Calculate.css";

const Calculate = ({ price }) => {
  const shippingFee = price < 100000 ? 3000 : 0;
  const total = Number(price) + shippingFee;

  return (
    <section className="Calculate">
      <div className="ProductPrice">
        <div className="detailAmount">
          <p className="amount-info">상품 금액</p>
          <p className="amount-price">{Number(price).toLocaleString()} 원</p>
        </div>
        <div className="shippingAmount">
          <p className="amount-info">배송비</p>
          <p className="amount-price">{shippingFee.toLocaleString()} 원</p>
        </div>
      </div>
      <hr />

      <div className="totalAmount">
        <p className="amount-info">총 금액</p>
        <p className="amount-price">{total.toLocaleString()} 원</p>
      </div>
    </section>
  );
};

export default Calculate;
