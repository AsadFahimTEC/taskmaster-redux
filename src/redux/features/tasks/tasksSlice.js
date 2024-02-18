import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasksSlice',
    intialState,
    reducers: {},
});

export default tasksSlice.reducer;