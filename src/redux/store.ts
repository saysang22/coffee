import cartSlice from './features/cart';
import sideMenuSlice from './features/sideMenu';
import foodSlice from './features/food';
import coffeeSlice from './features/coffee';
import menuSlice from './features/menu';
import counterSlice from './features/counterSlice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        counterSlice,
        menuSlice,
        coffeeSlice,
        foodSlice,
        sideMenuSlice,
        cartSlice,
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch