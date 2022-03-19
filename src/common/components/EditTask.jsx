import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectTodo, updateTodo } from "../../features/todos/todosSlice";
import { inputProps } from "../../themes/styles";

const flexWrapperProps = {
  px: { base: "0px", lg: "25px" },
  py: "25px",
  flexDir: "column",
  gap: "20px",
  boxShadow: "0 2px 4px 0 rgba(0,0,0,0.1)",
  borderRadius: "6px",
};

const flexTitleWrapperProps = {
  flexDir: "column",
  gap: "10px",
};

const headingProps = {
  fontSize: "24px",
  bgGradient: "linear-gradient(to-br, brand.primary, brand.secondary)",
  bgClip: "text",
  letterSpacing: "-.5px",
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
  const { taskId } = useParams();
  const navigate = useNavigate();
  const todo = useSelector((state) => selectTodo(state, taskId));
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState(null);
  const [isError, setIsError] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask === null || newTask === "") {
      setIsError(true);
      inputRef.current.focus();
      return;
    } else {
      setIsError(false);
      dispatch(updateTodo(newTask, taskId));
      setNewTask("");
      navigate("/");
    }
  };

  return (
    <Flex {...flexWrapperProps}>
      <Flex {...flexTitleWrapperProps}>
        <Heading {...headingProps}>Edit Task</Heading>
        <Text {...textProps}>Task ID: {taskId}</Text>
      </Flex>
      <Flex as="form" {...inputWrapperProps} onSubmit={handleSubmit}>
        <Input
          {...inputProps}
          value={newTask === null ? todo.todo : newTask}
          onChange={(e) => setNewTask(e.target.value)}
          ref={inputRef}
          borderBottomColor={isError && "crimson"}
          _focus={{ borderBottomColor: isError ? "crimson" : "brand.primary" }}
          _hover={{ borderBottomColor: isError ? "crimson" : "brand.primary" }}
        />
        <Flex {...buttonWrapperProps}>
          <Button type="submit" {...buttonProps} onClick={handleSubmit}>
            Update
          </Button>
          <Button {...buttonProps} onClick={() => navigate("/")}>
            Cancel
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EditTask;
