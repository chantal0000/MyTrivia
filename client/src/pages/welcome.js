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
                        src="https://cdn-icons-png.flaticon.com/512/5732/5732057.png"
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
