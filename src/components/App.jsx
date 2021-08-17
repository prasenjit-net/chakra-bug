import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Card } from "./Card";

export const App = () => {
  return (
    <ChakraProvider>
      <div>The application</div>
      <Card title="My Title" bodyText="Card body text" />
    </ChakraProvider>
  );
};
