import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./AddSlice"

const store = configureStore({
    reducer: addReducer
})  

export default store