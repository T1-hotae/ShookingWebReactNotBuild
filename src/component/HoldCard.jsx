import "./HoldCard.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HoldCard = () => {
  const nav = useNavigate();
  const [card, setCard] = useState(0);

  return (
    <section className="HoldCard">
      <div>새로운 카드를 등록해주세요</div>
      <div className="CardAdd" onClick={() => nav("/cardinfo")}>
        +
      </div>
    </section>
  );
};

export default HoldCard;
