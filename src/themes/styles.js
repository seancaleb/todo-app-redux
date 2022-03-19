const inputProps = {
  maxW: {
    base: "100%",
    lg: "500px",
  },
  py: "16px",
  px: "8px",
  borderRadius: "0px",
  border: "none",
  borderBottom: "1px solid rgba(0,0,0,0.1)",
  color: "brand.text.dark",
  fontWeight: "normal",
  letterSpacing: "-.2px",

  _placeholder: {
    opacity: 0.75,
    letterSpacing: "-.2px",
  },
  _hover: {
    borderColor: "brand.primary",
  },
  _focus: {
    borderBottom: "1px solid",
    borderColor: "brand.primary",
  },
};

export { inputProps };
