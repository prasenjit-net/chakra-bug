import { Card } from "../components/Card";
import { ChakraProvider, theme } from "@chakra-ui/react";

export default {
  title: "Examples/Card",
  component: Card,
  decorators: [
    (story) => <ChakraProvider theme={theme}>{story()}</ChakraProvider>,
  ],
};

const Template = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = { title: "Card Title", bodyText: "Card body text" };
