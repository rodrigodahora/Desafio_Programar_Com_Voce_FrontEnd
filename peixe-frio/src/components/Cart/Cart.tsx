/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useCartStore } from "@/store";
import styles from "@/components/Cart/Cart.module.scss";

export default function Cart() {
    const useStore = useCartStore();
    return (
        <>
            <div
                onClick={() => useStore.toggleCart()}
                className={styles.cart_container}>
                <img className={styles.cart_img} src="/cart.png" alt="user" />
                <p>Carrinho</p>
            </div>
            {
                !useStore.isOpen && (

                    <div onClick={() => useStore.toggleCart()} className={styles.container_cart}>
                        <div onClick={(e) => e.stopPropagation()} className={styles.carrinho}>
                            <h4>Meu Carrinho</h4>
                            {
                                useStore.cart.map((item) => (
                                    <div key={item.id}>{item.name}</div>
                                ))
                            }
                        </div>
                    </div>
                )
            }

        </>
    )
}