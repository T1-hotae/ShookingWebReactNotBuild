import Header from "../component/Header";
import Info from "../component/Info";
import ProductList from "../component/ProductList";

const Home = ({ badgeCount, products, setBadgeCount }) => {
  return (
    <>
      <Header badgeCount={badgeCount} />
      <Info count={products.length} />
      <ProductList
        products={products}
        badgeCount={badgeCount}
        setBadgeCount={setBadgeCount}
      />
    </>
  );
};

export default Home;
