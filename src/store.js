import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import urlReducer from "./slices/urlSlice.js";



const store = configureStore({
    reducer:{
        user:userReducer,
        url:urlReducer,


    }
})


export default store;