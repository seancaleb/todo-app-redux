import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";

const wrapperProps = {
  px: { base: "none", sm: "25px" },
  py: "25px",
  justifyContent: "space-between",
  alignItems: "center",
  border: "none",
  borderBottom: "1px solid rgba(0,0,0,0.1)",
};

const headingPropsWrapperProps = {
  flexDir: "column",
  gap: "5px",
};

const headingProps = {
  color: "brand.primary",
  letterSpacing: "-1px",
  fontSize: { base: "30px", md: "36px" },
  bgGradient: "linear-gradient(to-br, brand.primary, brand.secondary)",
  bgClip: "text",
  fontWeight: "semibold",
};

const textProps = {
  color: "brand.secondary",
  fontWeight: "medium",
};

const iconWrapperProps = {
  w: "40px",
  h: "40px",
  borderRadius: "50%",
  bgGradient: "linear-gradient(to-br, brand.primary, brand.secondary)",
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
};

const Title = ({ onToggle }) => {
  const date = new Date();
  const month = format(date, "LLLL");
  const day = format(date, "EEEE, do");

  return (
    <Flex {...wrapperProps}>
      <Flex {...headingPropsWrapperProps}>
        <Heading {...headingProps}>{day}</Heading>
        <Text {...textProps}>{month}</Text>
      </Flex>
      <Box onClick={onToggle} {...iconWrapperProps}>
        <AddIcon color="white" />
      </Box>
    </Flex>
  );
};

export default Title;
