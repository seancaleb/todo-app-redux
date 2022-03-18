import {
  CheckIcon,
  ChevronDownIcon,
  DeleteIcon,
  EditIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, updateTodoStatus } from "../../features/todos/todosSlice";

const MenuFilter = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        <MenuItem
          icon={<EditIcon color="brand.primary" />}
          onClick={handleClickEdit}
        >
          Edit
        </MenuItem>
        <MenuItem
          icon={<TimeIcon color="brand.primary" />}
          onClick={() => handleClickStatus("in progress")}
        >
          Set in progress
        </MenuItem>
        <MenuItem
          icon={<CheckIcon color="brand.primary" />}
          onClick={() => handleClickStatus("completed")}
        >
          Mark as completed
        </MenuItem>
        <MenuItem
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
