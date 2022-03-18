import React from "react";
import { Button, Flex, Input, ScaleFade } from "@chakra-ui/react";
import { inputProps } from "../../themes/styles";

const flexWrapperProps = {
  flexDir: { base: "column", lg: "row" },
  gap: "15px",
  alignItems: { base: "stretch", lg: "flex-end" },
  h: "100%",
};

const AddTask = ({ isOpen }) => {
  return (
    <ScaleFade in={isOpen} initialScale={0.9}>
      <Flex {...flexWrapperProps}>
        <Input placeholder="Add new task..." {...inputProps} />
        <Button>Add task</Button>
      </Flex>
    </ScaleFade>
  );
};

export default AddTask;
