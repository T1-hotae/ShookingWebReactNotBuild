import HeaderPay from "../component/HeaderPay";
import CardList from "../component/CardList";
import { ProductStateContext } from "../App";
import { useContext } from "react";

const Payment = () => {
  const { data } = useContext(ProductStateContext);

  return (
    <>
      <HeaderPay title={"보유 카드"} />
      <CardList cardData={data} />
    </>
  );
};

export default Payment;
