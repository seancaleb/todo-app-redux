import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectTodo, updateTodo } from "../../features/todos/todosSlice";
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

  const handleClickUpdate = () => {
    dispatch(updateTodo(newTask, taskId));
    setNewTask("");
    navigate("/");
  };

  return (
    <Flex {...flexWrapperProps}>
      <Flex {...flexTitleWrapperProps}>
        <Heading {...headingProps}>Edit Task</Heading>
        <Text {...textProps}>Task ID: {taskId}</Text>
      </Flex>
      <Flex {...inputWrapperProps}>
        <Input
          {...inputProps}
          value={newTask || todo.todo}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Flex {...buttonWrapperProps}>
          <Button {...buttonProps} onClick={handleClickUpdate}>
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
