/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCartStore } from "@/store";
import { ProductType } from "@/types/ProductType";
import "../../styles/Buttons.scss";

export default function AddCart({ product }: { product: ProductType }) {
    const { addProduct } = useCartStore();

    return (
        <button
            onClick={() => addProduct(product)}
            className="button_buy">Adicionar</button>
    )
}