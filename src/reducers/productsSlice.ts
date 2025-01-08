import { searchProducts } from '@/api/products/searchProduct'
import Product from '@/interfaces/Product'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'


interface Init{
    products: Product[],
    produtPerPage: number,
    search: string,
    page: number,
    requests: {
        search : "pending" | "idle"
    }
}

const initialState:Init = {
    products : [],
    produtPerPage: 100,
    search: "",
    page: 1,
    requests: {
        search : "idle"
    }
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        onHandleSearch:(state,action: PayloadAction<{search:string}>)=>{
            state.search = action.payload.search
        },

        onHandleProductPerPages:(state,action: PayloadAction<{productsPerPage:number}>)=>{
            state.produtPerPage = action.payload.productsPerPage
        }
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
    onHandleSearch,
    onHandleProductPerPages

} = productsSlice.actions
