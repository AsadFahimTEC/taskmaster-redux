import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Asad Ahmed",
    email: 'asad@gmail.com',
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducer: {}
});

export default userSlice.reducer;