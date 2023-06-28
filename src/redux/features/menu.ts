import HeaderItme from "@/model/header";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: HeaderItme[] =
    [
        { title: "HOME", id: 0, url: "/" },
        { title: "SHOP", id: 1, url: "/shop/" },
        {
            title: "게시판",
            id: 2,
            url: "/notice/",
        },

    ]


export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {

    }
})


export default menuSlice.reducer