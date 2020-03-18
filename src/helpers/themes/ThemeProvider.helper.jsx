import React from "react";
import { theme } from "./themes";
import { MuiThemeProvider, cssBaseline } from "@material-ui/core";

const ThemeProvider = ({ children }) => (
   <MuiThemeProvider theme={theme}>
      <cssBaseline />
      {children}
   </MuiThemeProvider>
);

export default ThemeProvider;
