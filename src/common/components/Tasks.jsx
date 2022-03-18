import React from "react";
import {
  Badge,
  Box,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import MenuFilter from "./MenuFilter";

const wrapperProps = {
  flexDir: "column",
};

const headingWrapperProps = {
  p: { base: "15px", sm: "25px" },
};

const headingProps = {
  fontSize: "24px",
  color: "brand.primary",
};

const tableWrapperProps = {
  h: "480px",
  overflow: "auto",
};

const trProps = { bg: "brand.light" };
const thProps = { color: "brand.primary" };

const data = Array(2).fill("");

const Tasks = () => {
  let tasks = data.map((item, index) => {
    const color = index % 2 === 0 ? "white" : "brand.light";

    return (
      <Tr key={nanoid()} bg={color}>
        <Td>This is todo {index}</Td>
        <Td>
          <Badge colorScheme="red">Pending</Badge>
        </Td>
        <Td isNumeric>
          <MenuFilter />
        </Td>
      </Tr>
    );
  });

  return (
    <Flex {...wrapperProps}>
      <Flex {...headingWrapperProps}>
        <Heading {...headingProps}>All Tasks</Heading>
      </Flex>
      <Box {...tableWrapperProps}>
        <Table variant="simple">
          <Thead>
            <Tr {...trProps}>
              <Th {...thProps}>Title</Th>
              <Th {...thProps}>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>{tasks}</Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default Tasks;
