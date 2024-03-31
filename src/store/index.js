import {configureStore} from "@reduxjs/toolkit";
import basketSlice from "./basketSlice.js";
import basketReducer from './productsSlice.js'

const store = configureStore({
    reducer: {
        basketSlice,
        basket: basketReducer
    }
})

export default store

