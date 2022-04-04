import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        cartShow:false
    },
    reducers: {
        addItemToCart: (state, action) => {
            const item = action.payload
            const existItem = state.cartItems.find(x => x.product.id === item.product.id)
            // state.cartItems.map(x=>x.product.id===existItem.product.id && alert('on goshuldy'))
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product.id === existItem.product.id ? item : x)
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        },
        delItemToCart:(state,action)=>{
            return{
                ...state,
                cartItems:state.cartItems.filter(item=>item.product.id!==action.payload)
            }
        },
        cartShow:(state)=>{
            return{
                ...state,
                cartShow:true
            }
        }
    }
})

export const { addItemToCart, delItemToCart, cartShow } = slice.actions

export default slice.reducer;