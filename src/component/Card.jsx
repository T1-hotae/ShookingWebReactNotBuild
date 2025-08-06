import "./Card.css";

const Card = ({ id, cardNum, name, date }) => {
  const cardNumString = () => {
    return cardNum.replace(/-/g, " ");
  };

  const limitName = () => {
    if (name.length > 15) {
      return name.slice(0, 15) + "...";
    }
    return name;
  };
  const cardName = limitName();
  const cardNumInCard = cardNumString();

  return (
    <div className="Card">
      <div className="GoldChip"></div>
      <div className="CardNumInCard">{cardNumInCard}</div>
      <div className="CardBottom">
        <div className="name">{cardName}</div>
        <div className="date">{date}</div>
      </div>
    </div>
  );
};

export default Card;
