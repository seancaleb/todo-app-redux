import {
  CheckIcon,
  ChevronDownIcon,
  DeleteIcon,
  EditIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const MenuFilter = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem icon={<EditIcon color="brand.primary" />}>Edit</MenuItem>
        <MenuItem icon={<TimeIcon color="brand.primary" />}>
          Set in progress
        </MenuItem>
        <MenuItem icon={<CheckIcon color="brand.primary" />}>
          Mark as completed
        </MenuItem>
        <MenuItem icon={<DeleteIcon color="brand.primary" />}>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuFilter;
