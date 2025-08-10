import { useNavigate } from "react-router-dom";
import { ProductContext } from "../App";
import Card from "./Card";
import "./CardInfoInput.css";
import { useState, useContext } from "react";
import Button from "./Button";

const CardInfoInput = () => {
  const [input, setInput] = useState({
    cardNum: "",
    date: "",
    name: "",
    cvc: "",
    pwd1: "",
    pwd2: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const [text, setText] = useState(0);
  const [name, setName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
    setText(e.target.value);
  };

  const onCreate = useContext(ProductContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(
      input.cardNum,
      input.date,
      (input.name = name),
      input.cvc,
      input.pwd1,
      input.pwd2
    );

    nav("/payment", { replace: true });
  };

  const onClickSubmit = () => {
    console.log(input);
    onSubmit(input);
  };

  return (
    <div className="CardInfoInput">
      <section className="CardList">
        <Card cardNum={input.cardNum} name={name} date={input.date} />
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
          name="date"
          value={input.date}
          onChange={onChangeInput}
          className="CardDateInput"
          type="text"
          placeholder="MM / YY"
          maxLength={5}
        />
      </section>
      <section>
        <div className="CardNameInfo">
          <p>카드 소유자 이름</p>
          <p>{text.length < 1 ? 0 : text.length}/30</p>
        </div>
        <input
          name="name"
          type="text"
          value={name}
          maxLength={30}
          onChange={onChangeName}
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
      {input.cardNum &&
        input.date &&
        name &&
        input.cvc &&
        input.pwd1 &&
        input.pwd2 && (
          <Button
            text={"작성 완료"}
            backgroundColor={"black"}
            onClick={onClickSubmit}
            width={"100"}
          />
        )}
    </div>
  );
};

export default CardInfoInput;
