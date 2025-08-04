import { useNavigate } from "react-router-dom";
import "./HeaderPay.css";

const HeaderPay = ({ title, leftChild }) => {
  const nav = useNavigate();

  return (
    <section className="HeaderPay">
      <div className="leftGroup">
        <div className={`leftGroup ${leftChild ? "" : "noLeftChild"}`}>
          {leftChild && (
            <div className="material-icons" onClick={() => nav(-1)}>
              chevron_left
            </div>
          )}
          <div className="title">{title}</div>
        </div>
      </div>

      <div className="material-icons" onClick={() => nav("/")}>
        close
      </div>
    </section>
  );
};

export default HeaderPay;
