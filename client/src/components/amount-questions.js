import { Box } from "@mui/system";
import { FormControl, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/actions";

const AmountQuestions = () => {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value));
    };
    return (
        <Box mt={3} sx={{ boxShadow: 1 }}>
            <FormControl fullWidth>
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label="Amount of Questions"
                    type="number"
                    required
                />
            </FormControl>
        </Box>
    );
};

export default AmountQuestions;
