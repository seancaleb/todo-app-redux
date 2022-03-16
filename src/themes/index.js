import { extendTheme } from "@chakra-ui/react";
import { colors, fonts } from "./foundations";
import { Button } from "./components";
import "../index.css";

const theme = extendTheme({
  colors,
  fonts,
  components: {
    Button,
  },
});

export default theme;
