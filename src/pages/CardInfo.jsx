import HeaderPay from "../component/HeaderPay";
import CardForm from "../component/CardForm";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductStateContext } from "../App";

const CardInfo = () => {
  const params = useParams();
  const data = useContext(ProductStateContext);

  const curCardData = data.data.filter(
    (item) => String(item.id) === String(params.id)
  );

  return (
    <div>
      <HeaderPay title={"카드 추가"} leftChild={true} />
      <CardForm initData={curCardData} data={data} />
    </div>
  );
};

export default CardInfo;
