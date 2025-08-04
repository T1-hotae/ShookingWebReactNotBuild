import HeaderPay from "../component/HeaderPay";
import Card from "../component/Card";
import CardInfoInput from "../component/CardInfoInput";

const CardInfo = () => {
  return (
    <div>
      <HeaderPay title={"카드 추가"} leftChild={true} />
      <CardInfoInput />
    </div>
  );
};

export default CardInfo;
