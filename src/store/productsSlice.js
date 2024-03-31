import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "basket",
    initialState: {
        products: []
    },
    reducers: {
        addBasket(state, action) {
            state.products.push(action.payload);
        },
    },
});

export const { addBasket } = productsSlice.actions;
export default productsSlice.reducer;
