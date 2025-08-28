import { useNavigate, useParams } from "react-router-dom";
import "./DetailOtherOption.css";

const DetailOtherOption = ({ sameName, products }) => {
  const nav = useNavigate();
  const param = useParams();
  const imgList = products.filter(
    (item) =>
      String(item.name) === String(sameName) &&
      String(item.id) !== String(param.id)
  );
  return (
    <div className="DetailOtherOption">
      <div className="detailOther-container">
        <h3>관련 상품</h3>
        <p> {sameName}의 다른 신발은 어떠신가요?</p>
      </div>
      <div className="otherImg">
        {imgList.map((item) => (
          <img
            key={item.id}
            src={item.img}
            onClick={() => nav(`/product/${item.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailOtherOption;
