import React from "react";
import { Box } from "@chakra-ui/react";

const mainProps = {
  as: "main",
  minH: { base: "auto", lg: "100vh" },
  display: "grid",
  gridTemplateColumns: "repeat(12,1fr)",
  gridTemplateRows: "auto 1fr",
  gap: {
    base: "20px",
    sm: "30px",
  },
  p: "20px",
  maxW: "2048px",
  marginInline: "auto",
};

const Main = (props) => {
  return <Box {...mainProps} {...props} />;
};

export default Main;
