import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://productcardapi.vercel.app/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.photo);
      })
      .catch((err) => console.error(err));
  }, []);
  return products;
};

export default useProduct;
