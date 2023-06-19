//src/redux/store.js
import counterSlice from './features/counterSlice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        counterSlice,
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch