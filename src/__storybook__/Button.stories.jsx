import Button from "../component/Button";

export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    backgroundColor: {
      control: "select",
      options: ["yellow", "black", "red", "blue", "green", "gray"],
    },
    width: { control: "text" }, // 숫자 또는 "100"을 문자열로 받음
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Click me",
  backgroundColor: "yellow",
  width: "100",
};
