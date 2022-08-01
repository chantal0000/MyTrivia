import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Setup from "./pages/setup";
import Questions from "./pages/questions";
import FinalView from "./pages/final-view";
import Welcome from "./pages/welcome";
import { Container, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: "#b47eb3",
        },
        // secondary: "#ffcf56",
    },
    typography: {
        fontFamily: "Quicksand",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMdeium: 600,
        fontWeightBold: 700,
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Container>
                    <Box textAlign="center" mt={5}>
                        <Switch>
                            <Route exact path="/">
                                <Welcome />
                            </Route>
                            <Route path="/setup">
                                <Setup />
                            </Route>
                            <Route path="/questions">
                                <Questions />
                            </Route>
                            <Route path="/final-view">
                                <FinalView />
                            </Route>
                        </Switch>
                    </Box>
                </Container>
            </Router>
        </ThemeProvider>
    );
}
