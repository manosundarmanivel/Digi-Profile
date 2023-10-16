import { createSlice } from "@reduxjs/toolkit";

const Leetlice = createSlice({
    name : "leet",
    initialState: {
        queryValue : ""
    },
    reducers:{
        setQueryValue : (state,action)=>{
            state.queryValue = action.payload;
        }
    }
})

export const {setQueryValue} = Leetlice.actions;
export default Leetlice.reducer;