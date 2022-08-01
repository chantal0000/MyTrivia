import { Box } from "@mui/system";
// import useAxios from "../hooks/axios";
import { useHistory } from "react-router";
// import { ThemeProvider } from "mui/material";
// import { theme } from "../theme";

// import styled from "@mui/material/styles/styled";
import { Button, keyframes, Typography, Paper, Ava } from "@mui/material";
// import "./styles.css";
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
                        // startIcon={
                        //     <Avatar
                        //         src={
                        //             "https://cdn.pixabay.com/photo/2017/03/31/12/16/quiz-2191229_1280.png"
                        //         }
                        //     />
                        // }
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

//  <Box mt={3}>
//                     <img
//                         id="welcome-img"
//                         src=" https://cdn.pixabay.com/photo/2017/03/31/12/16/quiz-2191229_1280.png"
//                     />
//                 </Box>
//                 <Box mt={25}>
//                     <Button
//                         color="primary"
//                         variant="outlined"
//                         sx={{
//                             height: 50,
//                             minWidth: 400,
//                         }}
//                         type="submit"
//                     >
//                         PLAY
//                     </Button>
//                 </Box>
