import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../redux/slice";
// the imported "counterReducer" is the counter.reducer in slice.js
export const store=configureStore({
    reducer:{
        counter: counterReducer
    }
});