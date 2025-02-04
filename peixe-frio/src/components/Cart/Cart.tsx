/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useCartStore } from "@/store";
import styles from "@/components/Cart/Cart.module.scss";
import Image from "next/image";

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
                            <button onClick={() => useStore.toggleCart()} className={styles.back_button}>Voltar</button>
                            <div className={styles.border}></div>
                            {
                                useStore.cart.map((item) => (
                                    <div className={styles.item} key={item.id}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                            className={styles.image_item} />
                                        <div>
                                            <h2 className="w-42 truncate">{item.name}</h2>
                                            <span>Quantidade: {item.quantity}</span>
                                            <p className="text-sm font-bold">R$ {item.price.toFixed(2)}</p>
                                        </div>
                                        <div className={styles.item_buttons}>
                                            <img onClick={() => useStore.deleteProduct(item)} src="./remove_img.png" alt="close" className={styles.close} />
                                            <button onClick={() => useStore.addProduct(item)}>+</button>
                                            <button onClick={() => useStore.removeProduct(item)}>-</button>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }

        </>
    )
}