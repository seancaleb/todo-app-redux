import {
  CheckIcon,
  ChevronDownIcon,
  DeleteIcon,
  EditIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteTodo,
  updateTodoStatus,
  selectTodo,
} from "../../features/todos/todosSlice";

const menuItemProps = {
  letterSpacing: "-.5px",
  color: "brand.text.dark",
  _hover: {
    bg: "rgba(75, 0, 130, .15)",
  },
};

const MenuFilter = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo = useSelector((state) => selectTodo(state, id));
  const { status } = todo;

  console.log(todo);

  const handleClickEdit = () => {
    navigate(`/${id}`);
  };

  const handleClickStatus = (status) => {
    dispatch(updateTodoStatus(id, status));
  };

  const handleClickDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        {status !== "completed" && (
          <>
            <MenuItem
              {...menuItemProps}
              icon={<EditIcon color="brand.primary" />}
              onClick={handleClickEdit}
            >
              Edit
            </MenuItem>
            <MenuItem
              {...menuItemProps}
              icon={<TimeIcon color="brand.primary" />}
              onClick={() => handleClickStatus("in progress")}
            >
              Set in progress
            </MenuItem>
            <MenuItem
              {...menuItemProps}
              icon={<CheckIcon color="brand.primary" />}
              onClick={() => handleClickStatus("completed")}
            >
              Mark as completed
            </MenuItem>
          </>
        )}

        <MenuItem
          {...menuItemProps}
          icon={<DeleteIcon color="brand.primary" />}
          onClick={handleClickDelete}
        >
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuFilter;
