import "./Button.css";

//버튼 컴포넌트 = 버튼 텍스트, 배경색, 클릭 효과, 너비
const Button = ({ text, backgroundColor, onClick, width }) => {
  //스타일 설정
  const setStyle = {
    backgroundColor:
      backgroundColor === "yellow" ? "rgb(247, 226, 0)" : backgroundColor,
    color: backgroundColor === "black" ? "white" : "",
    width: width === "100" ? "100%" : width + "px",
    fontSize: Number(width) < 70 ? "14px" : "",
  };

  return (
    <div className="btn">
      <button className="btn-text" style={setStyle} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
