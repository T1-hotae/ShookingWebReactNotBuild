import { useContext } from "react";
import { ProductStateContext } from "../App";
import styles from "./AmountResult.module.css";

const AmountResult = () => {
  const { cartInfos } = useContext(ProductStateContext);
  let price = cartInfos
    .map((cartInfo) => cartInfo.price)
    .reduce((a, b) => a + b, 0);
  price = price < 100000 ? price + 3000 : price;
  return (
    <div className={styles.AmountResult}>
      <h2>결제 완료!</h2>
      <p>총 {cartInfos.length}개의 상품을 구매하셨습니다!</p>
      <h4>총 결제 금액</h4>
      <h3>{price.toLocaleString()}원</h3>
    </div>
  );
};

export default AmountResult;
