import { Box } from "@mui/system";
import { Typography, Button, Card } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { handleScoChange, handleAmountChange } from "../redux/actions";
// import Confi from "./confetti";
const FinalView = () => {
    const { score } = useSelector((state) => state);
    const dispatch = useDispatch();
    const history = useHistory();
    const handlePlayAgain = () => {
        dispatch(handleScoChange(0));
        dispatch(handleAmountChange());
        history.push("/setup");
    };

    return (
        <Card>
            <Box>
                <Typography>Your Score {score}</Typography>
                <Button
                    onClick={handlePlayAgain}
                    // variant="contained"
                    // color="secondary"
                    // size="small"
                    sx={{
                        backgroundColor: "primary.dark",
                        "&:hover": {
                            backgroundColor: "primary.main",
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    play again
                </Button>
            </Box>
        </Card>
    );
};

export default FinalView;
