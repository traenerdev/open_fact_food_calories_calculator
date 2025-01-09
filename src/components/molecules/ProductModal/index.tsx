import Product from "@/interfaces/Product";
import { useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface Props{
    ref: React.RefObject<HTMLDialogElement | null>,
    product:Product | null
}

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56'];


/**
 * Display a product details in modal
 * 
 * @param ref React ref using for open / close modal with daisyUi
 * @param product Open Fact Food product
 */

export default function ProductModal({product, ref}:Props){

    const data = useMemo(()=>{
        return [
            { name: 'Protéines', value: product?.nutriments.proteins_100g },
            { name: 'Lipides', value: product?.nutriments.fat_100g },
            { name: 'Glucides', value: product?.nutriments.carbohydrates_100g },
        ]
    },[product])


    const calories = useMemo(()=>{
        const total = ((product?.nutriments.proteins_100g || 0) * 4) + ((product?.nutriments.fat_100g || 0) * 9) + ((product?.nutriments.carbohydrates_100g || 0) * 4);
        return Math.round(total)
    },[product])

    return(
        <dialog id="my_modal_1" className="modal" ref={ref}>
        <div className="modal-box">

            {/* Name & Brand */} 
            <div className="flex flex-col">
                <span className="font-bold text-[1.6rem]">
                    {product?.product_name || product?.abbreviated_product_name_fr || product?.generic_name_fr}
                </span>
                <span>
                    {product?.brands ? product.brands : "-"}
                </span>
            </div>
               
            
            
            <div
                className="flex items-center justify-center"
            >
                <PieChart 
                    width={300} 
                    height={300}
                    className="focus:outline-none"
                >
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        innerRadius={60}
                        dataKey="value"
                        label
                        >
                        {data.map((entry, index) => (
                            <Cell 
                                key={`cell-${index}`} 
                                fill={COLORS[index % COLORS.length]} 
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>

                {/* Center calories label */} 
                <div className="absolute flex items-center justify-center text-center">
                    <p className="text-xl font-bold relative top-[-10px]">{calories} kcal</p>
                </div>
            </div>

         
            <div className="modal-action">
                <form method="dialog">
                    <button className="btn">
                        Close
                    </button>
                </form>
            </div>
        </div>
        </dialog>
    )
}