import HeaderPay from "../component/HeaderPay";
import CardForm from "../component/CardForm";

const CardInfo = () => {
  return (
    <div>
      <HeaderPay title={"카드 추가"} leftChild={true} />
      <CardForm />
    </div>
  );
};

export default CardInfo;
