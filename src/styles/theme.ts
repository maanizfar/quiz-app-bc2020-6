import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3498db",
    },
    secondary: {
      main: "#16a085",
      dark: "#34495e",
    },

    background: {
      default: "#ecf0f1",
      paper: "#ecf0f1",
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
