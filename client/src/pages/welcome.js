import { Box } from "@mui/system";
import { useHistory } from "react-router";
import { Button, keyframes, Typography, Paper, Grid } from "@mui/material";
import { useEffect, useState } from "react";

const Welcome = () => {
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/setup");
    };

    return (
        <>
            <Grid>
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
                            sx={
                                {
                                    // height: 50,
                                }
                            }
                            type="submit"
                        >
                            LET'S PLAY
                        </Button>
                    </Box>
                </form>
            </Grid>
        </>
    );
};

export default Welcome;
