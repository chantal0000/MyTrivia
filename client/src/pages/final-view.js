// import { Box } from "@mui/system";
// import { Typography, Button, Card } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { handleScoChange, handleAmountChange } from "../redux/actions";

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
        <div>
            <h1> You answered {score} correctly!</h1>
            <button type="button" onClick={handlePlayAgain}>
                play again
            </button>
            {/* <Button
                onClick={handlePlayAgain}
                variant="contained"
                color="secondary"
                mt={5}
            >
                play again
            </Button> */}
        </div>
        // <Card>
        //     <Box mt={10}>
        //         <Typography variant="h1">

        //         </Typography>

        //         <Button
        //             onClick={handlePlayAgain}
        //             variant="contained"
        //             color="secondary"
        //             mt={5}
        //         >
        //             play again
        //         </Button>
        //     </Box>
        // </Card>
    );
};

export default FinalView;

//  <Card>
//      <Box mt={10}>
//          <Typography variant="h1">You answered {score} correctly!</Typography>

//          <Button
//              onClick={handlePlayAgain}
//              variant="contained"
//              color="secondary"
//              mt={5}
//          >
//              play again
//          </Button>
//      </Box>
//  </Card>;
