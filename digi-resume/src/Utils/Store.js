import { configureStore } from "@reduxjs/toolkit";
import LeetSlice from "./LeetSlice";
import GitSlice from "./GitSlice";

const store = configureStore({
  reducer :  {
    leet : LeetSlice,
    git : GitSlice,
    
  }
})

export default store