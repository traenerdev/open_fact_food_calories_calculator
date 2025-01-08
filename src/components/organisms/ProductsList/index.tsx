"use client"

import { searchProducts } from "@/api/products/searchProduct"
import { AppDispatch, RootState } from "@/app/store"
import Product from "@/components/molecules/Product"
import ProductModal from "@/components/molecules/ProductModal"
import ProductType from "@/interfaces/Product"
import { onHandleProductPerPages } from "@/reducers/productsSlice"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Id, toast, ToastContainer } from "react-toastify"


export default function ProductLsts(){

    
    const dispatch = useDispatch<AppDispatch>()
    const toastId =useRef<Id | null>(null);(null);
    const products = useSelector((state:RootState)=> state.productsSlice.products)
    const search = useSelector((state:RootState)=> state.productsSlice.search)
    const productsPerPage = useSelector((state:RootState)=> state.productsSlice.produtPerPage)
    const pending = useSelector((state:RootState) => state.productsSlice.requests.search === "pending") 
    const [productSelected, setProductSelected] = useState<ProductType | null>(null)
    const ref= useRef<HTMLDialogElement>(null)


    const handleChangeProductPerPages = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const nbProducts = parseInt(event.target.value)
        if(nbProducts !== productsPerPage && search !==""){
            dispatch(searchProducts({search, page: 1, productsPerPage:nbProducts}))
        }
        dispatch(onHandleProductPerPages({productsPerPage: nbProducts}))

    };


    const onOpenModal = (product:ProductType) => {
        setProductSelected(product)
        ref.current?.showModal()
    }


    

    // Monitor the `pending` state and manage the toast
    useEffect(() => {
        if (pending) {
            // Show toast when search is pending
            if (!toastId.current) {
                toastId.current = toast.loading("Recherche en cours...", {
                    autoClose: false, // Keep the toast visible until manually dismissed
                    closeOnClick: false,
                    style: {
                        backgroundColor: "#3e8ae6", // Vert
                        color: "#fff", // Blanc
                        borderRadius: "10px",
                        padding: "10px",
                      },

                });
            }
        } else {
            // Remove toast when search is finished
            if (toastId.current) {
                toast.dismiss(toastId.current);
                toastId.current = null;
            }
        }
    }, [pending]);

    

    return(
        <section>
            <div className="mt-6 mb-6">
                <div className="">
                    <label 
                        htmlFor="customSelect" 
                        className="text-md font-semibold text-gray-700 mr-3"
                    >
                        Afficher
                    </label>
                    <select
                        id="customSelect"
                        value={productsPerPage}
                        onChange={handleChangeProductPerPages}
                        disabled={pending}
                        className="w-[170px] p-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-md transition-all bg-white"
                    >
                        <option value="" disabled>
                            Sélectionnez une option
                        </option>
                        <option value="25">25 produits</option>
                        <option value="50">50 produits</option>
                        <option value="100">100 produits</option>
                    </select>
                </div>
                
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                            <th scope="col" className="px-6 py-4">#</th>
                            <th scope="col" className="px-6 py-4"></th>
                            <th scope="col" className="px-6 py-4">Label</th>
                            <th scope="col" className="px-6 py-4">Marque</th>
                            <th scope="col" className="px-6 py-4">Protéines/100g</th>
                            <th scope="col" className="px-6 py-4">Glucides/100g</th>
                            <th scope="col" className="px-6 py-4">Lipides/100g</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => {
                                return(
                                    <Product
                                        key={index}
                                        product={product}
                                        index={index}
                                        onClick={onOpenModal}
                                        
                                    />
                                )
                            })}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>

            <ToastContainer position={"bottom-center"} />

            <ProductModal
                ref={ref}
                product={productSelected}
            />
                        
        </section>
    )
}