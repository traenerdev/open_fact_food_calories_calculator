"use client"

import { AppDispatch, RootState } from "@/app/store";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {searchProducts} from "@/api/products/searchProduct"
import Spinner from "@/components/atoms/Spinner";

export default function SearchInput(){

    const dispatch = useDispatch<AppDispatch>()
    const [search, setSearch] = useState<string>('')
    const pending = useSelector((state:RootState) => state.productsSlice.requests.search === "pending") 


    useEffect(() => {
      // This ensures that the state is properly initialized after client-side rendering
      setSearch('');
    }, []);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const onSubmit = () => {
        dispatch(searchProducts({search}))
    }


    return(
        <div className="flex flex-row">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          className="w-[350px] mr-3 p-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-md transition-all"
          placeholder="Entre le nom de ton produit"
          disabled={pending}
        />
         <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition p-3 "
          onClick={onSubmit}
          disabled={pending}
        >
            {!pending ? "Rechercher" : <Spinner />}
        </button>
        </div>
    )
}