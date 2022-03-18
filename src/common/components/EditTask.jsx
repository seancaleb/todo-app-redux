import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { inputProps } from "../../themes/styles";

const flexWrapperProps = {
  px: { base: "0px", lg: "25px" },
  py: "25px",
  flexDir: "column",
  gap: "20px",
  boxShadow: "0 5px 5px 0 rgba(0,0,0,0.1)",
  borderRadius: "6px",
};

const flexTitleWrapperProps = {
  flexDir: "column",
  gap: "10px",
};

const headingProps = {
  fontSize: "24px",
  color: "brand.primary",
};

const textProps = {
  fontSize: "14px",
  color: "brand.text.light",
};

const inputWrapperProps = {
  flexDir: { base: "column", lg: "row" },
  gap: "20px",
  justifyContent: { lg: "space-between" },
};

const buttonWrapperProps = {
  flexDir: { base: "column", sm: "row" },
  gap: "10px",
};

const buttonProps = {
  flex: { sm: 1 },
};

const EditTask = () => {
  return (
    <Flex {...flexWrapperProps}>
      <Flex {...flexTitleWrapperProps}>
        <Heading {...headingProps}>Edit Task</Heading>
        <Text {...textProps}>Task ID: as214k9sd789124j9asd</Text>
      </Flex>
      <Flex {...inputWrapperProps}>
        <Input placeholder="Your current task" {...inputProps} />
        <Flex {...buttonWrapperProps}>
          <Button {...buttonProps}>Update</Button>
          <Button {...buttonProps}>Cancel</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EditTask;
