import "./Button.css";

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
