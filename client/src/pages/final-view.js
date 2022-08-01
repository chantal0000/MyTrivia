// import { Box } from "@mui/system";
// import { Typography, Button, Card } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { handleScoChange, handleAmountChange } from "../redux/actions";
// import React, { Component } from "react";

import ParticlesBg from "particles-bg";

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
        <div id="container">
            <div id="content">
                <h1 id="score"> You answered {score} questions correctly!</h1>
                <button
                    className="button-55"
                    role="button"
                    type="button"
                    onClick={handlePlayAgain}
                >
                    PLAY AGAIN
                </button>
            </div>
            <ParticlesBg type="lines" bg={true} color="#d6d6ff" num={100} />
        </div>
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
