import Fields from "../components/fields";
import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AmountQuestions from "../components/amount-questions";
import useAxios from "../hooks/axios";
import { useHistory } from "react-router";

const Setup = () => {
    const { response, error, loading } = useAxios({ url: "/api_category.php" });
    console.log("data", response);
    const history = useHistory();

    if (loading) {
        return (
            <Box>
                <CircularProgress />
            </Box>
        );
    }
    if (error) {
        return <Typography>something went wrong!</Typography>;
    }
    const difficultyOptions = [
        { id: "easy", name: "easy" },
        { id: "medium", name: "medium" },
        { id: "hard", name: "hard" },
    ];
    const typeOptions = [
        { id: "multiple", name: "multiple choice" },
        { id: "boolean", name: "true/false" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/questions");
    };
    return (
        <form onSubmit={handleSubmit}>
            <Fields options={response.trivia_categories} label="Category" />
            <Fields options={difficultyOptions} label="Difficulty" />
            <Fields options={typeOptions} label="Type" />
            <AmountQuestions />
            <Box mt={3} width="100%">
                <Button fullWidth variant="contained" type="submit">
                    Let's Play
                </Button>
            </Box>
        </form>
    );
};

export default Setup;
