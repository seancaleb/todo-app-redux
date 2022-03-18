import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Card } from "./";

const contentWrapperProps = {
  flexDir: "column",
  gap: "5px",
};

const headingProps = {
  fontWeight: "medium",
  color: "brand.primary",
  fontSize: { base: "30px", md: "36px" },
};

const textWrapperProps = {
  alignItems: "center",
  gap: "10px",
};

const textProps = {
  fontSize: "14px",
  color: "brand.text.light",
};

const circleProps = {
  w: "10px",
  h: "10px",
  bg: "brand.complete.main",
  borderRadius: "50%",
};

const Status = () => {
  return (
    <Card>
      <Flex {...contentWrapperProps}>
        <Heading {...headingProps}>0</Heading>
        <Flex {...textWrapperProps}>
          <Text {...textProps}>Tasks Remaining</Text>
          <Box {...circleProps} />
        </Flex>
      </Flex>
    </Card>
  );
};

export default Status;
