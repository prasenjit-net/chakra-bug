import { Button, Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";

export const Card = ({ title, bodyText }) => {
  return (
    <VStack p={3}>
      <Heading mb={2}>{title}</Heading>
      <Text>{bodyText}</Text>
      <Button colorScheme="blue" color="red.100">
        Click
      </Button>
    </VStack>
  );
};
