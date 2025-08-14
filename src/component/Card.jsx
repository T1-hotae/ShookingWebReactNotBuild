import "./Card.css";

const Card = ({ id, cardNum, name, expiry }) => {
  const cardNumString = () => {
    return String(cardNum).replace(/-/g, " ");
  };

  const limitName = () => {
    if (name.length > 15) {
      return name.slice(0, 15) + "...";
    }
    return name.toUpperCase();
  };

  const cardName = limitName();
  const cardNumber = cardNumString();

  return (
    <section className="Card">
      <div className="goldChip"></div>
      <div className="cardInputInfo">
        <div className="cardNumber">{cardNumber}</div>
        <div className="cardBottom">
          <div className="name">{cardName === "" ? "NAME" : cardName}</div>
          <div className="expiry">{expiry === "" ? "MM/YY" : expiry}</div>
        </div>
      </div>
    </section>
  );
};

export default Card;
