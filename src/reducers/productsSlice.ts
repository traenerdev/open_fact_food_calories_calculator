import { searchProducts } from '@/api/products/searchProduct'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


interface Init{
    products: [],
    requests: {
        search : "pending" | "idle"
    }
}

const initialState:Init = {
    products : [],
    requests: {
        search : "idle"
    }
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(searchProducts.pending, (state)=> {
                state.requests.search = "pending"
        })

        .addCase(searchProducts.fulfilled, (state,{payload})=> {
            state.requests.search = "idle"
            if(payload?.products){
                console.log(payload?.products)
                state.products = payload?.products
            }
    })
    
    }
})


export default productsSlice.reducer
export const { 


} = productsSlice.actions
