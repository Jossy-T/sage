import { createSlice } from "@reduxjs/toolkit"
const initialState={value:0}
const counter = createSlice({
    name:"counterapp",
    initialState,
    reducers:{
        add:(state)=>{state.value+=1},
        subtract:(state)=>{state.value-=1},
        reset:(state)=>{state.value=0},
    }
});

export const{add,subtract,reset}=counter.actions;
export default counter.reducer;