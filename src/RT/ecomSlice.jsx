import { createSlice } from "@reduxjs/toolkit";

const ecomSlice = createSlice(
    {
        name:'ecom',
        initialState:{
            items:[],
            cartval:0
        },
        reducers:{
            addtocart:(state,action)=>{
                let d = state.items.find((e)=>e.id === action.payload.id)
                if(d){
                    alert("cant add product becuase already in cart")
                }else{
               state.items.push(action.payload);
               state.cartval = state.items.length
                }
            },
            removeitem:(state,action)=>{
                state.items.splice(action.payload,1)
                state.cartval -=1
            }
        }
    }
)

export const {addtocart,removeitem} = ecomSlice.actions;

export default ecomSlice.reducer;