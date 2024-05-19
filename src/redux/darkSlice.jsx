import { createSlice } from "@reduxjs/toolkit";


const darkSlice = createSlice({
    name: 'dark',
    initialState: {
        dark: null,
    },
    reducers: {
        toggleDark: (state,action) => {
            return action.payload;
        }
    }
})

export const { toggleDark } = darkSlice.actions;

export default darkSlice.reducer;