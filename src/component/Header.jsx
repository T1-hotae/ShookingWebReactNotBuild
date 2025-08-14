import shoppingIcon from "../assets/shoppingIcon.svg";
import arrowback from "../assets/arrowback.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ badgeCount, backBtn }) => {
  const nav = useNavigate();
  return (
    <header className="header">
      <div className="logo"></div>
      {!backBtn ? (
        <div className="cart-icon" onClick={() => nav("/cart")}>
          <img src={shoppingIcon} alt="장바구니 아이콘" />
          <span id="badge">{badgeCount}</span>
        </div>
      ) : (
        <img src={arrowback} className="arrowback" onClick={() => nav(-1)} />
      )}
    </header>
  );
};

export default Header;
