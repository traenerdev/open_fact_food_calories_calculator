import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


/************** RECUPERATION DE L'ENSEMBLE DES CLIENTS ****************/
export const searchProducts = createAsyncThunk('products/search', async (data:{search:string}) => {

    const url = `https://world.openfoodfacts.org/cgi/search.pl`
    console.log('url', url)
    try {
        const response = await axios.get(
          url,
          {
            params: {
              search_terms: data.search,
              json: true,
            },
          }
        );

        const products = response.data.products
        return {products}
        
      } catch (err) {
        console.log('erreur', err)
      }
  })