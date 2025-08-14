import "./CardList.css";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";

const CardList = ({ cardData = [] }) => {
  //기본값 추가
  const nav = useNavigate();

  return (
    <section className="CardList">
      {!cardData || cardData.length === 0 ? (
        <div>새로운 카드를 등록해주세요</div>
      ) : null}

      <div>
        <div className="list_wrapper">
          {cardData.map((item) => (
            <div key={item.id} className="card-item">
              <Card {...item} />
              <Button text={"이 카드로 결제하기"} backgroundColor={"yellow"} />
            </div>
          ))}
        </div>
      </div>

      <div className="CardAdd" onClick={() => nav("/cardinfo")}>
        +
      </div>
    </section>
  );
};

export default CardList;
