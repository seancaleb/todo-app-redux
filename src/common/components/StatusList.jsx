import { Flex } from "@chakra-ui/react";
import React from "react";
import { Status } from "./";

const data = [1, 2, 3];

const flexProps = {
  flexDir: "column",
  gap: "15px",
};

const StatusList = () => {
  let renderStatusList;

  renderStatusList = data.map((item) => <Status key={item} />);

  return <Flex {...flexProps}>{renderStatusList}</Flex>;
};

export default StatusList;
