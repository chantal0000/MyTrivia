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
        <Card>
            <Box>
                <Typography fontWeight="bold" variant="h4" color="secondary">
                    Question {questionList + 1}
                </Typography>
                <Typography variant="h4" color="primary" sx={{}}>
                    {decode(response.results[questionList].question)}
                </Typography>

                {options.map((data, id) => (
                    <Box id="my-class" key={id} mt={2}>
                        <Button
                            color="primary"
                            variant="outlined"
                            sx={{
                                height: 50,
                                minWidth: 400,
                            }}
                            onClick={handleClick}
                        >
                            {decode(data)}
                        </Button>
                    </Box>
                ))}

                <Box>
                    <Typography>
                        Score: {score} / {response.results.length}{" "}
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
};

export default Questions;
