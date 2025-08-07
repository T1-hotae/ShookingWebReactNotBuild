import HeaderPay from "../component/HeaderPay";
import HoldCard from "../component/HoldCard";
import { ProductStateContext } from "../App";
import { useContext } from "react";

const Payment = () => {
  const data = useContext(ProductStateContext);

  return (
    <div>
      <HeaderPay title={"보유 카드"} />
      <HoldCard cardData={data} />
    </div>
  );
};

export default Payment;
