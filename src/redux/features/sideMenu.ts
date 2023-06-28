import { SideMenuType } from "@/model/sideMenu";
import { createSlice } from "@reduxjs/toolkit";

const initialState: SideMenuType[] = [
    { id: 0, name: '이벤트', url: '/shop/event/' },
    { id: 1, name: '콜드브루', url: '/shop/drink/coldBrew/' },
    { id: 2, name: '브루드커피', url: '/shop/drink/brood/' },
    { id: 3, name: '에스프레소', url: '/shop/drink/espresso/' },
    { id: 4, name: '브레드', url: '/shop/food/bread/' },
    { id: 5, name: '케이크', url: '/shop/food/cake/' },
    { id: 6, name: '샌드위치 & 샐러드', url: '/shop/food/' },
    { id: 7, name: '샌드위치 & 샐러드', url: '/shop/story/' },
    { id: 8, name: 'SHOP', url: '/shop/' },
]

export const sideMenuSlice = createSlice({
    name: 'sideMenu',
    initialState,
    reducers: {}
})

export default sideMenuSlice.reducer