import "./HoldCard.css";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const HoldCard = ({ cardData }) => {
  const nav = useNavigate();

  return (
    <section className="HoldCard">
      {cardData.length === 0 ? <div>새로운 카드를 등록해주세요</div> : null}

      <div>
        {cardData.map((item) => (
          <div className="list_wrapper">
            {cardData.map((item) => (
              <div key={item.id} className="card-item">
                <Card {...item} />
                <button className="btn-payment">이 카드로 결재하기</button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="CardAdd" onClick={() => nav("/cardinfo")}>
        +
      </div>
    </section>
  );
};

export default HoldCard;
