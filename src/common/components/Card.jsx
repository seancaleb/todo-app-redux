import { Box } from "@chakra-ui/react";
import React from "react";

const propStyles = {
  p: { base: "15px", sm: "25px" },
  boxShadow: "0 5px 5px 0 rgba(0,0,0,0.1)",
  borderRadius: "6px",
};

const Card = (props) => {
  return <Box {...propStyles} {...props} />;
};

export default Card;
