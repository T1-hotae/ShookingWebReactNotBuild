import HeaderPay from "../component/HeaderPay";
import HoldCard from "../component/HoldCard";

const Payment = () => {
  return (
    <div>
      <HeaderPay title={"보유 카드"} />
      <HoldCard />
    </div>
  );
};

export default Payment;
