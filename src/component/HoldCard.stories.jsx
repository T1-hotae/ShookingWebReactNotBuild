import HoldCard from "./HoldCard";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Example/HoldCard",
  component: HoldCard,
  argTypes: {
    cardData: { control: "object" },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <HoldCard {...args} />;

export const EmptyCardList = Template.bind({});
EmptyCardList.args = {
  cardData: [],
};

export const WithOneCard = Template.bind({});
WithOneCard.args = {
  cardData: [
    {
      id: 1,
      name: "Hwang",
      cardNum: "3302-2152-6654-4487",
      expiry: "04/26",
      cvc: "368",
    },
  ],
};
