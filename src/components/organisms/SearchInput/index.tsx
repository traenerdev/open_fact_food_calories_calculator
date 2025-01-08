"use client"

import { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import {searchProducts} from "@/api/products/searchProduct"
import Spinner from "@/components/atoms/Spinner";
import { onHandleSearch } from "@/reducers/productsSlice";

export default function SearchInput(){

    const dispatch = useDispatch<AppDispatch>()
    const pending = useSelector((state:RootState) => state.productsSlice.requests.search === "pending") 
    const search = useSelector((state:RootState) => state.productsSlice.search) 
    const page = useSelector((state:RootState)=> state.productsSlice.page)
    const productsPerPage = useSelector((state:RootState)=> state.productsSlice.produtPerPage)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(onHandleSearch({search: event.target.value}))
    };

    const onSubmit = () => {
        dispatch(searchProducts({search, page, productsPerPage}))
    }


    return(
        <div className="flex flex-row relative mt-6">
          <form
            onSubmit={(event) => {
              event.preventDefault(); // Empêche le rechargement de la page
              onSubmit(); // Appelle la fonction de recherche
            }}
            className="flex items-center flex grow"
          >
            <input
              type="text"
              value={search}
              onChange={handleChange}
              className="flex grow  mr-3 p-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-md transition-all"
              placeholder="Entre le nom de ton produit (ex: oeuf, avocat ...)"
              disabled={pending}
            />
            <button
              type="submit"
              className="bg-lime-600 text-white text-semibold py-2 rounded-lg hover:bg-lime-500 transition p-3 "
              disabled={pending}
            >
                {!pending ? "Rechercher" : <Spinner />}
            </button>
          </form>
        </div>
    )
}