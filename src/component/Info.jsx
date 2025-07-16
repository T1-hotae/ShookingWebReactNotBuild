import "./info.css";

const Info = (props) => {
  return (
    <section class="info">
      <h1>신발 상품 목록</h1>
      <p>현재 {props.count}개의 상품이 있습니다.</p>
    </section>
  );
};

export default Info;
