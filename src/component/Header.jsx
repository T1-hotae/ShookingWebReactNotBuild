import shoppingIcon from "../assets/shoppingIcon.svg";
import "./Header.css";

const Header = ({ badgeCount }) => {
  return (
    <header className="header">
      <div className="logo"></div>
      <div className="cart-icon">
        <img src={shoppingIcon} alt="장바구니 아이콘" />
        <span id="badge">{badgeCount}</span>
      </div>
    </header>
  );
};

export default Header;
