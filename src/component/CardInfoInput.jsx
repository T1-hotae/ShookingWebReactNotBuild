import Card from "./Card";
import "./CardInfoInput.css";
import { useState } from "react";

const CardInfoInput = () => {
  const [text, setText] = useState(0);
  const [cardNum, setCardNum] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [cvc, setCvc] = useState("");
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");

  const onChangeCardNum = (e) => {
    setCardNum(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    setText(e.target.value);
  };

  const onChangeCvc = (e) => {
    setCvc(e.target.value);
  };
  const onChangePwd1 = (e) => {
    setPwd1(e.target.value);
  };
  const onChangePwd2 = (e) => {
    setPwd2(e.target.value);
  };

  return (
    <div className="CardInfoInput">
      <section className="Card">
        <Card cardNum={cardNum} name={name} date={date} />
      </section>
      <section className="CardNum">
        <p>카드 번호</p>
        <input
          value={cardNum}
          onChange={onChangeCardNum}
          className="CardNumInput"
          type="text"
          maxLength={19}
        />
      </section>
      <section>
        <p>만료일</p>
        <input
          value={date}
          onChange={onChangeDate}
          className="CardDateInput"
          type="text"
          placeholder="MM / YY"
          maxLength={5}
        />
      </section>
      <section>
        <div className="CardNameInfo">
          <p>카드 소유자 이름</p>
          <p>{text.length <= 0 ? 0 : text.length}/30</p>
        </div>
        <input
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
            value={cvc}
            onChange={onChangeCvc}
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
            value={pwd1}
            onChange={onChangePwd1}
            className="CardPwd1"
            type="text"
            maxLength={1}
          />
          <input
            value={pwd2}
            onChange={onChangePwd2}
            className="CardPwd2"
            type="text"
            maxLength={1}
          />
          <div>•</div>
          <div>•</div>
        </div>
      </section>
      {cardNum && date && name && cvc && pwd1 && pwd2 && (
        <button className="btn-complete">작성 완료</button>
      )}
    </div>
  );
};

export default CardInfoInput;
