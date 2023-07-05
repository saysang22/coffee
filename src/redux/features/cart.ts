import { CartType } from "@/model/cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: CartType = {
    val: 0,
    status: false
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state) => {
            state.val++
        },

        minus: (state) => {

            if (state.val < 0) {
                state.val--
            } else {
                state.val = 0
            }
        },

        show: (state) => {
            state.status = !state.status

        }
    }
})
export const { add, show, minus } = cartSlice.actions
export default cartSlice.reducer