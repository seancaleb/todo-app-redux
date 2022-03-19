import React, { useState } from "react";
import { Button, Flex, Input, ScaleFade } from "@chakra-ui/react";
import { inputProps } from "../../themes/styles";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todos/todosSlice";

const flexWrapperProps = {
  flexDir: { base: "column", lg: "row" },
  gap: "15px",
  alignItems: { base: "stretch", lg: "flex-end" },
  h: "100%",
};

const AddTask = ({ isOpen }) => {
  const [task, setTask] = useState(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (task === null || task === "") {
      console.log(task);
      return;
    } else {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  console.log(task);
  return (
    <ScaleFade in={isOpen} initialScale={0.9}>
      <Flex {...flexWrapperProps}>
        <Input
          {...inputProps}
          value={task || ""}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={handleClick}>Add task</Button>
      </Flex>
    </ScaleFade>
  );
};

export default AddTask;
