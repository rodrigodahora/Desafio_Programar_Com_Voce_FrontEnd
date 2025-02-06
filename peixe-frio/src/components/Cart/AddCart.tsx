/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCartStore } from "@/store";
import { ProductType } from "@/types/ProductType";
import styles from "@/components/Cart/Cart.module.scss";

export default function AddCart({ product }: { product: ProductType }) {
    const { addProduct } = useCartStore();

    return (
        <button
            onClick={() => addProduct(product)}
            className={styles.button_buy}>Adicionar</button>
    )
}