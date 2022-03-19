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
  bgGradient: "linear-gradient(to-br, brand.primary, brand.secondary)",
  bgClip: "text",
  letterSpacing: "-.5px",
};

const tableWrapperProps = {
  h: "480px",
  overflow: "auto",
  position: "relative",
};

const trProps = { bg: "brand.light" };
const thProps = {
  bgGradient: "linear-gradient(to-br, brand.primary, brand.secondary)",
  bgClip: "text",
  letterSpacing: "-.5px",
};

const Tasks = () => {
  const todos = useSelector(selectTodos);
  let tasks;

  if (todos.length > 0) {
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
          <Td
            minW={{ base: "150px", lg: "250px" }}
            letterSpacing="-.5px"
            color="brand.text.dark"
          >
            {todo.todo}
          </Td>
          <Td w="150px">
            <Badge colorScheme={color} letterSpacing="-.5px">
              {todo.status}
            </Badge>
          </Td>
          <Td isNumeric>
            <MenuFilter id={todo.id} />
          </Td>
        </Tr>
      );
    });
  } else {
    tasks = (
      <Text
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        width="100%"
        textAlign="center"
      >
        No tasks at the moment.
      </Text>
    );
  }

  return (
    <Flex {...wrapperProps}>
      <Flex {...headingWrapperProps}>
        <Heading {...headingProps}>All Tasks</Heading>
      </Flex>
      <Box {...tableWrapperProps}>
        {todos.length > 0 && (
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
        )}
        {todos.length === 0 && tasks}
      </Box>
    </Flex>
  );
};

export default Tasks;
