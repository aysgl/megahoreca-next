import { createSlice } from "@reduxjs/toolkit"
import { prodata } from "../data/prodata"

const slice = createSlice({
    name: "products",
    initialState: {
        product: prodata,
        cart: []
    },
    reducers: {
        getProductDetail: (products, action) => {
            const product = products.product.find(i => i.id === Number(action.payload))
            products.product = product
        },
        addToCart: (products, action) => {
            products.cart.push(action.payload)
        },
        changeCartCount: (products, action) => {
            const { id, value } = action.payload
            const product = products.cart.find(i => i.id === Number(id))
            product.count = value
            product.totalPrice = value * product.price
        },
        removeItemFromCart: (products, action) => {
            const index = products.cart.findIndex(i => i.id === action.payload)
            products.cart.splice(index, 1)
        }
    }
})

export default slice.reducer


// Actions
export const { getProductDetail, addToCart, changeCartCount, removeItemFromCart } = slice.actions
