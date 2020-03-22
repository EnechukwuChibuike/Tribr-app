import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
   palette: {
      primary: {
         light: "#f1f2f4",
         main: "#2d2447",
         dark: "#1a0b28"
      },
      secondary: {
         light: "#f8fcbc",
         main: "#ff8484",
         dark: "#0d0628"
      }
   },
   typography: {
      fontFamily: "Raleway, Arial"
   },

   overrides: {
      MuiCssBaseline: {
         "@global": {
            // '@font-face': [Quicksand],
         }
      }
   }
});
