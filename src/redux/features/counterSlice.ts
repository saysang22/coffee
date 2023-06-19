//src/redux/features/dounterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//createSlice: 슬라이스 생성
//PayloadAction: 제공한 값을 기반으로 페이로드의 유형을 자동으로 유추하고 확인

type CounterState = {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        reset: (state) => { state.value = 0 },
        add: (state) => {
            state.value++
        },
        remove: (state) => {
            state.value--
        },
        addPayload: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        removePayload: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        }
    }
})

export const { reset, add, remove, addPayload, removePayload } = counterSlice.actions
export default counterSlice.reducer