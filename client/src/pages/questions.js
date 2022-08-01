import { Typography, Button, CircularProgress, Card } from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import useAxios from "../hooks/axios";
import { handleScoChange } from "../redux/actions";

// generate random Number between 0 and max number
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_questions,
        score,
    } = useSelector((state) => state);
    const history = useHistory();
    const dispatch = useDispatch();

    let apiUrl = `/api.php?amount=${amount_of_questions}`;
    // The concat() method is used to merge two or more arrays.
    // This method does not change the existing arrays, but instead returns a new array.
    if (question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`);
    }
    if (question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
    }
    if (question_type) {
        apiUrl = apiUrl.concat(`&type=${question_type}`);
    }
    //type is not send with api

    const { response, loading } = useAxios({ url: apiUrl });
    const [questionList, setQuestionList] = useState(0);
    const [options, setOptions] = useState([]);

    console.log("options", options);

    useEffect(() => {
        if (response?.results.length) {
            const question = response.results[questionList];
            console.log("question", question);
            let answers = [...question.incorrect_answers];
            // puttin the answer in random position
            answers.splice(
                getRandomNumber(question.incorrect_answers.length),
                0,
                question.correct_answer
            );
            setOptions(answers);
        }
        // timer?

        //list will change everytime button is clicked
    }, [response, questionList]);

    // if loading is true return box
    if (loading) {
        return (
            <Box>
                <CircularProgress></CircularProgress>
            </Box>
        );
    }
    // console.log("data in questions", response);
    const handleClick = (e) => {
        // check if user answer is = to question.correct_answer
        const question = response.results[questionList];
        if (e.target.textContent === question.correct_answer) {
            dispatch(handleScoChange(score + 1));
        }
        if (questionList + 1 < response.results.length) {
            setQuestionList(questionList + 1);
        } else {
            history.push("/final-view");
        }
    };

    return (
        <Box m={2} pt={3}>
            <Typography variant="h5">Question {questionList + 1}</Typography>
            <Card sx={{ boxShadow: 1, backgroundColor: "#b47eb349" }}>
                <Typography m={3} variant="h4">
                    {decode(response.results[questionList].question)}
                </Typography>
            </Card>
            {options.map((data, id) => (
                <Box id="my-class" key={id} mt={2}>
                    <Button
                        variant="outlined"
                        sx={{
                            height: 50,
                            minWidth: 500,
                            boxShadow: 1,
                            fontSize: "20px",
                        }}
                        onClick={handleClick}
                    >
                        {decode(data)}
                    </Button>
                </Box>
            ))}
            <Box>
                <Typography mt={5} variant="h5">
                    Score: {score} / {response.results.length}{" "}
                </Typography>
            </Box>
        </Box>
    );
};

export default Questions;
