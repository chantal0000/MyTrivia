import {
    CHANGE_AMOUNT,
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_SCORE,
    CHANGE_TYPE,
} from "./action-options";

export const handleCatChange = (payload) => ({
    type: CHANGE_CATEGORY,
    payload,
});
export const handleAmountChange = (payload) => ({
    type: CHANGE_AMOUNT,
    payload,
});
export const handleDifChange = (payload) => ({
    type: CHANGE_DIFFICULTY,
    payload,
});
export const handleScoChange = (payload) => ({
    type: CHANGE_SCORE,
    payload,
});
export const handleTypeChange = (payload) => ({
    type: CHANGE_TYPE,
    payload,
});
