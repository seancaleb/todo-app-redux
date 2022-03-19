import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Card } from "./";
import { useSelector } from "react-redux";
import { selectTodosByStatus } from "../../features/todos/todosSlice";

const contentWrapperProps = {
  flexDir: "column",
  gap: "5px",
};

const headingProps = {
  fontWeight: "semibold",
  color: "brand.primary",
  fontSize: "30px",
};

const textWrapperProps = {
  alignItems: "center",
  gap: "8px",
};

const textProps = {
  fontSize: "14px",
  textTransform: "capitalize",
  color: "brand.text.light",
};

const circleProps = {
  w: "10px",
  h: "10px",
  borderRadius: "50%",
};

const Status = ({ status }) => {
  let color;
  const filteredStatus = useSelector((state) =>
    selectTodosByStatus(state, status)
  );

  switch (status) {
    case "pending":
      color = "red";
      break;
    case "in progress":
      color = "orange";
      break;
    case "completed":
      color = "green";
      break;
    default:
      break;
  }

  return (
    <Card>
      <Flex {...contentWrapperProps}>
        <Heading {...headingProps}>{filteredStatus.length}</Heading>
        <Flex {...textWrapperProps}>
          <Text {...textProps}>{status}</Text>
          <Box {...circleProps} bg={color} />
        </Flex>
      </Flex>
    </Card>
  );
};

export default Status;
