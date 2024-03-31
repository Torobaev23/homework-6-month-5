import {createSlice} from "@reduxjs/toolkit";

const basketSlice = createSlice ({
    name: "basket",
    initialState: {
        productsCount: 0,
    },
    reducers: {
        addBasket(state, action) {
            state.productsCount++
        }
    }
})

export const {addBasket} = basketSlice.actions
export default basketSlice.reducer