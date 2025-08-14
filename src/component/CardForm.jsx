import { useNavigate } from "react-router-dom";
import { ProductContext } from "../App";
import Card from "./Card";
import "./CardForm.css";
import { useState, useContext } from "react";
import Button from "./Button";

const CardForm = () => {
  const [input, setInput] = useState({
    cardNum: "",
    expiry: "",
    name: "",
    cvc: "",
    pwd1: "",
    pwd2: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const { onCreate } = useContext(ProductContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
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

  const onClickSubmit = () => {
    //console.log(input);
    onSubmit(input);
  };

  const isComplete = Object.values(input).every(Boolean);

  return (
    <div className="CardForm">
      <section className="CardList">
        <Card cardNum={input.cardNum} name={input.name} expiry={input.expiry} />
      </section>
      <section className="CardNum">
        <p>카드 번호</p>
        <input
          name="cardNum"
          value={input.cardNum}
          onChange={onChangeInput}
          className="CardNumInput"
          type="text"
          maxLength={19}
        />
      </section>
      <section>
        <p>만료일</p>
        <input
          name="expiry"
          value={input.expiry}
          onChange={onChangeInput}
          className="CardExpiryInput"
          type="text"
          placeholder="MM / YY"
          maxLength={5}
        />
      </section>
      <section>
        <div className="CardNameInfo">
          <p>카드 소유자 이름</p>
          <p>{input.name.length}/30</p>
        </div>
        <input
          name="name"
          type="text"
          value={input.name}
          maxLength={30}
          onChange={onChangeInput}
          className="CardNameInput"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </section>
      <section>
        <p>보안코드(CVC/CVV)</p>
        <div className="CardCode">
          <input
            name="cvc"
            value={input.cvc}
            onChange={onChangeInput}
            className="CardCodeNum"
            type="text"
            maxLength={4}
          />
          <div className="material-icons">help</div>
        </div>
      </section>
      <section>
        <p>카드 비밀번호</p>
        <div className="CardPwd">
          <input
            name="pwd1"
            value={input.pwd1}
            onChange={onChangeInput}
            className="CardPwd1"
            type="text"
            maxLength={1}
          />
          <input
            name="pwd2"
            value={input.pwd2}
            onChange={onChangeInput}
            className="CardPwd2"
            type="text"
            maxLength={1}
          />
          <div>•</div>
          <div>•</div>
        </div>
      </section>
      <section className="btn-complete">
        {isComplete && (
          <Button
            text={"작성 완료"}
            backgroundColor={"black"}
            onClick={onClickSubmit}
            width={"100"}
          />
        )}
      </section>
    </div>
  );
};

export default CardForm;
