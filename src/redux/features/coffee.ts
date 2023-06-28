import { CoffeeType } from "@/model/coffee";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CoffeeType[] = [
    { id: 0, name: '콜드브루', url: '/shop/drink/coldBrew', status: false },
    { id: 1, name: '브루드커피', url: '/shop/drink/brood', status: false },
    { id: 2, name: '에스프레소', url: '/shop/drink/espresso', status: false },
]

export const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {

    }
})

export default coffeeSlice.reducer