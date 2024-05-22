import { createSlice } from "@reduxjs/toolkit";


const darkSlice = createSlice({
    name: 'dark',
    initialState: {
        dark: null,
        arrData:[],
    },
    reducers: {
        toggleDark: (state,action) => {
            return action.payload;
        },
        addData :(state,action)=>{
            state.arrData=[...state.arrData, action.payload]
            localStorage.setItem('event', JSON.stringify(state.arrData))
        }
    }
})

export const { toggleDark,addData } = darkSlice.actions;

export default darkSlice.reducer;