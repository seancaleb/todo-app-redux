import React, { useState, useRef, useEffect } from "react";
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
  const inputRef = useRef();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === null || task === "") {
      setIsError(true);
      inputRef.current.focus();

      return;
    } else {
      setIsError(false);
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <ScaleFade in={isOpen} initialScale={0.9}>
      <Flex as="form" {...flexWrapperProps} onSubmit={handleSubmit}>
        <Input
          {...inputProps}
          value={task || ""}
          onChange={(e) => setTask(e.target.value)}
          ref={inputRef}
          borderBottomColor={isError && "crimson"}
          _focus={{ borderBottomColor: isError ? "crimson" : "brand.primary" }}
          _hover={{ borderBottomColor: isError ? "crimson" : "brand.primary" }}
        />
        <Button type="submit" onClick={handleSubmit}>
          Add task
        </Button>
      </Flex>
    </ScaleFade>
  );
};

export default AddTask;
