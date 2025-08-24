import { useNavigate } from "react-router-dom";
import { ProductStateContext } from "../App";
import { useContext, useEffect, useState } from "react";

const useCard = (id) => {
  const nav = useNavigate();
  const data = useContext(ProductStateContext);
  const [curCardItem, setCurCardItem] = useState();

  useEffect(() => {
    const currentCardItem = data.find((item) => String(item.id) === String(id));
    if (!currentCardItem) {
      window.alert("존재하지 않는 카드입니다.");
      nav("/cardInfo", { replace: true });
    }
    setCurCardItem(currentCardItem);
  }, [id]);
  return curCardItem;
};

export default useCard;
