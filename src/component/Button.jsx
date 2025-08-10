import "./Button.css";

// background는 "색깔", width는 100%이면, 100, 다른 것은 다 px로 인식
const Button = ({ text, backgroundColor, onClick, width }) => {
  return (
    <div className="btn">
      <button
        className="btn-text"
        style={{
          backgroundColor:
            backgroundColor === "yellow" ? "rgb(247, 226, 0)" : backgroundColor,
          color: backgroundColor === "black" ? "white" : "",
          width: width === "100" ? "100%" : width + "px",
          fontSize: Number(width) < 70 ? "14px" : "",
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
