import "./CardList.css";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";
import { useContext } from "react";
import { ProductStateContext } from "../App";

const CardList = ({ cardData = [] }) => {
  const nav = useNavigate();
  const { cartInfos } = useContext(ProductStateContext);

  const onCardClick = () => {
    if (cartInfos && cartInfos.length > 0) return nav("/amount");
    else return alert("장바구니가 비어있습니다.");
  };

  return (
    <section className="CardList">
      {/* cardData가 없으면 문구 추가 */}
      {!cardData || cardData.length === 0 ? (
        <div>새로운 카드를 등록해주세요</div>
      ) : null}

      <div className="list_wrapper">
        {cardData.map((item) => (
          <div key={item.id} className="card-item">
            <div onClick={() => nav(`/cardInfo/${item.id}`)}>
              <Card {...item} />
            </div>
            <Button
              text={"이 카드로 결제하기"}
              backgroundColor={"yellow"}
              onClick={onCardClick}
            />
          </div>
        ))}
      </div>

      <div className="cardAdd" onClick={() => nav("/cardinfo/")}>
        +
      </div>
    </section>
  );
};

export default CardList;
