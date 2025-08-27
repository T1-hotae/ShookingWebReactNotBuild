import { useParams } from "react-router-dom";
import Header from "../component/Header";
import DetailInfo from "../component/DetailInfo";
import DetailOtherOption from "../component/DetailOtherOption";
import useProduct from "../hooks/useProduct";

const ProductDetail = () => {
  const param = useParams();
  const products = useProduct();
  if (products.length === 0) {
    return <div>로딩중 ...</div>;
  }

  const curProduct = products.find(
    (item) => String(item.id) === String(param.id)
  );
  if (!curProduct) {
    return <div>해당 상품을 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <Header option={true} backBtn={true} />
      <DetailInfo product={curProduct} />
      <DetailOtherOption sameName={curProduct.name} products={products} />
    </>
  );
};

export default ProductDetail;
