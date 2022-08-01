import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    handleCatChange,
    handleDifChange,
    handleTypeChange,
} from "../redux/actions";

const Fields = (props) => {
    const { label, options } = props;
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        // so when you click on select the things are selected and shown
        setValue(e.target.value);
        switch (label) {
            case "Category":
                dispatch(handleCatChange(e.target.value));
                break;
            case "Difficulty":
                dispatch(handleDifChange(e.target.value));
                break;
            case "Type":
                dispatch(handleTypeChange(e.target.value));
                break;
            default:
                return;
        }
    };

    return (
        <Box mt={3} sx={{ boxShadow: 1 }}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    {options.map(({ id, name }) => (
                        <MenuItem value={id} key={id}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Fields;
