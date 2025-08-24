import Header from "../component/Header";
import AmountResult from "../component/AmountResult";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../App";

const Amount = () => {
  const nav = useNavigate();
  const { setCartInfos } = useContext(ProductContext);
  const onAmountClick = () => {
    nav("/", { replace: true });
    setCartInfos([]);
  };
  return (
    <>
      <Header backBtn={false} option={false} />
      <AmountResult />
      <Button
        text={"상품 목록 보기"}
        backgroundColor={"yellow"}
        width={440}
        onClick={onAmountClick}
      />
    </>
  );
};

export default Amount;
