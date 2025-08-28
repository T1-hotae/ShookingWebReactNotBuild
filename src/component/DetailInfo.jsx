import Button from "./Button";
import "./DetailInfo.css";
import { useEffect, useState, useContext } from "react";
import { ProductContext, ProductStateContext } from "../App";
import { useParams } from "react-router-dom";

const DetailInfo = ({ product }) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
  }, [product]);

  const params = useParams();

  const { cartInfos } = useContext(ProductStateContext);
  const { onCart } = useContext(ProductContext);

  const productPrice = Number(product.price.replace(",", "").replace("원", ""));
  const isAdd = cartInfos.some((item) => String(item.id) === String(params.id));

  const onDetailClick = () => {
    onCart(product.id, productPrice, count);
  };

  return (
    // 이미지 정보
    <div className="DetailInfo">
      <div className="detailImg-container">
        <div className="detailImg">
          {product ? (
            <img src={product.img} alt="상품 이미지" />
          ) : (
            <p>상품 정보를 불러오는 중...</p>
          )}
        </div>
      </div>
      {/* 상품 정보 */}
      <div className="detailInfo-container">
        <div className="detailProduct">
          <p className="pdName">{product.name}</p>
          <p className="pdInfo">{product.info}</p>
          <p className="pdPrice">{product.price}</p>
        </div>
        <div className="detailCounter">
          <button onClick={() => setCount(count + 1)}>+</button>
          <span>{String(count).padStart(2, "0")}</span>
          <button onClick={() => setCount(Math.max(1, count - 1))}>-</button>
        </div>
      </div>
      {/* 상품 담기 */}
      <div className="detail-button">
        {!isAdd ? (
          <Button
            text={"장바구니 담기"}
            backgroundColor={"black"}
            onClick={onDetailClick}
          />
        ) : (
          <Button text={"장바구니 담김!"} backgroundColor={"gray"} />
        )}
      </div>
    </div>
  );
};

export default DetailInfo;
