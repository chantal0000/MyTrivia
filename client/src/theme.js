import { createTheme } from "@material-ui/core/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
    typography: {
        fontFamily: ['Fjalla One"'].join(","),
    },
    palette: {
        primary: {
            main: "#ce93d8",
        },
        secondary: {
            main: "#f44336",
        },
    },
});

export default theme;
