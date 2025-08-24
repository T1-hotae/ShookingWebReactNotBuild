import "./CardForm.css";
import Card from "./Card";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../App";
import { useState, useContext, useEffect } from "react";

const CardForm = ({ initData }) => {
  console.log("initData", initData);

  //카드 정보 받아오기
  const [input, setInput] = useState({
    cardNum: "",
    expiry: "",
    name: "",
    cvc: "",
    pwd1: "",
    pwd2: "",
  });

  const nav = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  //카드 정보 전송하기
  const { onCreate } = useContext(ProductContext);

  const onClickSubmit = () => {
    onCreate(
      input.cardNum,
      input.expiry,
      input.name,
      input.cvc,
      input.pwd1,
      input.pwd2
    );

    nav("/payment", { replace: true });
  };

  //input 객체 요소들이 전부 있을 때,
  const isComplete = Object.values(input).every(Boolean);

  return (
    <div className="CardForm">
      {/* 화면에 표시될 카드 모양 */}
      <section className="CardModule">
        <Card cardNum={input.cardNum} name={input.name} expiry={input.expiry} />
      </section>

      {/* 카드 번호 */}
      <section>
        <p>카드 번호</p>
        <input
          name="cardNum"
          value={input.cardNum}
          onChange={onChangeInput}
          className="card-numberInput"
          type="text"
          maxLength={19}
        />
      </section>

      {/* 만료일 */}
      <section>
        <p>만료일</p>
        <input
          name="expiry"
          value={input.expiry}
          onChange={onChangeInput}
          className="card-expiryInput"
          type="text"
          placeholder="MM / YY"
          maxLength={5}
        />
      </section>

      {/* 카드 소유자 이름 */}
      <section>
        <div className="card-ownerInfo">
          <p>카드 소유자 이름</p>
          <p>{input.name.length}/30</p>
        </div>
        <input
          name="name"
          type="text"
          value={input.name}
          maxLength={30}
          onChange={onChangeInput}
          className="card-ownerInput"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </section>

      {/* 보안 코드 */}
      <section>
        <p>보안코드(CVC/CVV)</p>
        <div className="card-code">
          <input
            name="cvc"
            value={input.cvc}
            onChange={onChangeInput}
            className="card-codeNum"
            type="text"
            maxLength={4}
            inputMode="numeric"
          />
          <div className="material-icons">help</div>
        </div>
      </section>

      {/* 비밀번호 */}
      <section>
        <p>카드 비밀번호</p>
        <div className="card-pwd">
          <input
            name="pwd1"
            value={input.pwd1}
            onChange={onChangeInput}
            className="card-pwd1"
            type="text"
            maxLength={1}
            inputMode="numeric"
          />
          <input
            name="pwd2"
            value={input.pwd2}
            onChange={onChangeInput}
            className="card-pwd2"
            type="text"
            maxLength={1}
            inputMode="numeric"
          />
          <div>•</div>
          <div>•</div>
        </div>
      </section>

      {/* 완료 버튼 */}
      <section className="btn-complete">
        {isComplete ? (
          <Button
            text={"작성 완료"}
            backgroundColor={"black"}
            onClick={onClickSubmit}
            width={"100"}
          />
        ) : (
          ""
        )}
      </section>
    </div>
  );
};

export default CardForm;
