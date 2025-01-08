import Product from "@/interfaces/Product";
import { Modal } from "react-daisyui";

interface Props{
    ref: React.RefObject<HTMLDialogElement | null>,
    product:Product | null
}

/**
 * Display a product details in modal
 * 
 * @param ref React ref using for open / close modal with daisyUi
 * @param product Open Fact Food product
 */

export default function ProductModal({product, ref}:Props){
    return(
        <dialog id="my_modal_1" className="modal" ref={ref}>
        <div className="modal-box">
            <h3 className="text-lg font-bold">
            {product?.product_name || product?.abbreviated_product_name_fr || product?.generic_name_fr}
            </h3>
            <p className="py-4">
                Fiche en cours ! (Le développement n'est pas fini !)
            </p>
            <div className="modal-action">
                <form method="dialog">
                    <button className="btn">Close</button>
                </form>
            </div>
        </div>
        </dialog>
    )
}