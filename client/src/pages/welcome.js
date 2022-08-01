import { Box } from "@mui/system";
import { useHistory } from "react-router";
import { Button, keyframes, Typography, Paper, Ava } from "@mui/material";
import { useEffect, useState } from "react";

const Welcome = () => {
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/setup");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box mt={3}>
                    <img
                        id="welcome-img"
                        src=" https://cdn.pixabay.com/photo/2017/03/31/12/16/quiz-2191229_1280.png"
                    />
                </Box>
                <Box mt={3}>
                    <Button
                        color="primary"
                        variant="contained"
                        sx={{
                            height: 50,
                            minWidth: 400,
                        }}
                        type="submit"
                    >
                        LET'S PLAY
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default Welcome;
