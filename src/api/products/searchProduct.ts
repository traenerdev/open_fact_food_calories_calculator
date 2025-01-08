import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


/************** RECUPERATION DE L'ENSEMBLE DES CLIENTS ****************/
export const searchProducts = createAsyncThunk('products/search', async (data:{search:string, page:number, productsPerPage: number}) => {

    const {search, page, productsPerPage} = data
    const url = `https://world.openfoodfacts.org/cgi/search.pl`

    try {
        const response = await axios.get(
          url,
          {
            params: {
              search_terms: search,
              search_simple:1,
              json: true,
              page_size: productsPerPage,
              page: page
            },
          }
        );

        const products = response.data.products
        return {products}
        
      } catch (err) {
        console.log('erreur', err)
      }
  })