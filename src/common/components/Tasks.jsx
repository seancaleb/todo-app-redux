import React from "react";
import {
  Badge,
  Box,
  Text,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectTodos } from "../../features/todos/todosSlice";
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

const Tasks = () => {
  const todos = useSelector(selectTodos);
  let tasks;

  if (todos) {
    tasks = todos.map((todo, index) => {
      const rowColor = index % 2 === 0 ? "white" : "brand.light";
      let color;

      switch (todo.status) {
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
        <Tr key={todo.id} bg={rowColor}>
          <Td minW={{ base: "150px", lg: "250px" }}>{todo.todo}</Td>
          <Td w="150px">
            <Badge colorScheme={color}>{todo.status}</Badge>
          </Td>
          <Td isNumeric>
            <MenuFilter id={todo.id} />
          </Td>
        </Tr>
      );
    });
  } else {
    tasks = <Text>No Todos at the moment.</Text>;
  }

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
