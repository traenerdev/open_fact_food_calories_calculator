import ProductType from "@/interfaces/Product"
import Image from "next/image"

interface Props{
    product: ProductType,
    index: number
}

export default function Product({product,index}:Props){

    return(
    <tr className="border-b dark:border-neutral-500 h-[90px] hover:bg-slate-100 hover:cursor-pointer">
        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
        <td>
            <div className="rounded-full w-[50px] h-[50px] overflow-hidden relative">
                {product.image_front_url && (
                    <Image
                        src={product.image_front_url}
                        alt={"Photo produit"}
                        className='w-full relative object-cover'
                        fill
                        quality={75}
                    />
                )}
            </div>
        </td>
        <td className="whitespace-nowrap px-6 py-4 font-semibold">
            {product.product_name || product.abbreviated_product_name_fr || product.generic_name_fr}
        </td>
        <td className="whitespace-nowrap px-6 py-4 font-semibold">
            {product.nutriments.proteins_100g}g
        </td>
        <td className="whitespace-nowrap px-6 py-4 font-semibold">
            {product.nutriments.carbohydrates_100g}g
        </td>
        <td className="whitespace-nowrap px-6 py-4 font-semibold">
            {product.nutriments.fat_100g}g
        </td>
    </tr>
        
    )
}