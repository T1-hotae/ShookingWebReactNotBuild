import "./Card.css";

const Card = ({ id, cardNum, name, date }) => {
  const cardNumString = () => {
    return String(cardNum).replace(/-/g, " ");
  };

  const limitName = () => {
    if (name.length > 15) {
      return name.slice(0, 15) + "...";
    }
    return name;
  };

  const cardName = limitName();
  const cardNumber = cardNumString();

  return (
    <div className="Card">
      <div className="GoldChip"></div>
      <div className="CardInputInfo">
        <div className="CardNumber">{cardNumber}</div>
        <div className="CardBottom">
          <div className="name">{cardName === "" ? "NAME" : cardName}</div>
          <div className="date">{date === "" ? "MM/YY" : date}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
