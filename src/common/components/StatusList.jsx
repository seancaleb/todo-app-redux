import { Flex } from "@chakra-ui/react";
import React from "react";
import { Status } from "./";
import { nanoid } from "@reduxjs/toolkit";

const statusList = ["pending", "in progress", "completed"];

const flexProps = {
  flexDir: "column",
  gap: "15px",
};

const StatusList = () => {
  let renderStatusList;

  renderStatusList = statusList.map((status) => (
    <Status key={nanoid()} status={status} />
  ));

  return <Flex {...flexProps}>{renderStatusList}</Flex>;
};

export default StatusList;
