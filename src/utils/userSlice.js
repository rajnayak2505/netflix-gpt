import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null, // as per action will update here action.payload for addUser / removeUser
    reducers: {
        addUser : (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        },
    },
});

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;