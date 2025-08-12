import CartItem from "./CartItem";

export default {
  title: "Example/CartItem",
  component: CartItem,
  argTypes: {
    product: { control: "object" },
  },
};

const Template = (args) => <CartItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    img: "https://image.brandi.co.kr/cproductdetail/2023/04/07/3ca2118938f4d810d054dc2e7d4ceadc.jpg",
    name: "스트릿 슈즈",
    price: "65,000원",
  },
  onPriceChange: () => {},
};
