import { FoodType } from "@/model/food";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FoodType[] = [
    { id: 0, name: '브레드', url: '/shop/food/bread', status: false },
    { id: 1, name: '케이크', url: '/shop/food/cake', status: false },
    { id: 2, name: '샌드위치 & 샐러드', url: '/shop/food/sandwich', status: false },
]

export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {}
})

export default foodSlice.reducer