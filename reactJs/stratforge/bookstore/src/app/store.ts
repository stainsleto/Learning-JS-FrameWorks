import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/bookSlice";

export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware : (getDefaultmiddleware) => getDefaultmiddleware().concat(apiSlice.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType <typeof store.getState>