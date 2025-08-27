import shoppingIcon from "../assets/shoppingIcon.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ badgeCount, backBtn, option }) => {
  const nav = useNavigate();
  return (
    <header className="header">
      <div>
        {backBtn ? (
          <span className="material-icons" onClick={() => nav("/")}>
            arrow_back
          </span>
        ) : null}
      </div>

      {option ? (
        <div className="cart-icon" onClick={() => nav("/cart")}>
          <img src={shoppingIcon} alt="장바구니 아이콘" />
          <span
            className={`badge ${badgeCount > 0 ? "badge-exist" : "badge-none"}`}
          >
            {badgeCount}
          </span>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
