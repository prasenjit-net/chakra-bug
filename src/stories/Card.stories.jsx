import { Card } from "../components/Card";

export default {
  title: "Examples/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = { title: "Card Title", bodyText: "Card body text" };
