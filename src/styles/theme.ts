import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8458B3",
      dark: "#a28089",
      contrastText: "white",
    },
    secondary: {
      main: "#a0d2eb",
      light: "#d0bdf4",
    },
    common: {
      white: "#e5eaf5",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",

      "@media (max-width: 600px)": {
        fontSize: "2.25rem",
      },
    },
    button: {
      "@media (max-width: 600px)": {
        fontSize: "0.75rem",
      },
    },
  },
});
