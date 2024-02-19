import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Asad",
    email: 'asad@gmail.com',
    userTasks: [],
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducer: {}
});

export default userSlice.reducer;