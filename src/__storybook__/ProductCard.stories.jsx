import ProductCard from "../component/ProductCard";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  name: "나이키 에어맥스",
  info: "편안한 착화감과 스타일",
  price: "₩129,000",
  img: "https://via.placeholder.com/150", // 임시 이미지
  badgeCount: 0,
  setBadgeCount: () => {}, // Storybook용 더미 함수
};
