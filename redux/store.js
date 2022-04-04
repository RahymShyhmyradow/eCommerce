import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice';
import itemQuantity from '../features/quantity/quantitySlice'
export default configureStore({
    reducer:{
        cart:cartReducer,
        quantity:itemQuantity
    }
})