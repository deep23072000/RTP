import { createSlice } from "@reduxjs/toolkit";

const ecomSlice = createSlice(
    {
        name:'ecom',
        initialState:{
            items:[]
        },
        reducers:{
            addtocart:(state,action)=>{
               state.items.push(action.payload)
            }
        }
    }
)

export const {addtocart} = ecomSlice.actions;

export default ecomSlice.reducer;