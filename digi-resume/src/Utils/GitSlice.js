import { createSlice } from "@reduxjs/toolkit";

const Gitslice = createSlice({
    name : "git",
    initialState: {
        queryValue : ""
    },
    reducers:{
        setQueryValue : (state,action)=>{
            state.queryValue = action.payload;
        }
    }
})

export const {setQueryValue} = Gitslice.actions;
export default Gitslice.reducer;