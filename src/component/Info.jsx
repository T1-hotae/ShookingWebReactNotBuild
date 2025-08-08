import "./Info.css";

const Info = ({ title, count }) => {
  return (
    <section className="info">
      <h1>{title}</h1>
      <p>현재 {count}개의 상품이 있습니다.</p>
    </section>
  );
};

export default Info;
