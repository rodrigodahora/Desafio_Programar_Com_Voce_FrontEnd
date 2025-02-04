/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductType } from "@/types/ProductType";
import { getStaticProps } from "@/pages/index";


type CartState = {
    cart: ProductType[];
    addProduct: (product: ProductType) => void;
    removeProduct: (product: ProductType) => void;
    deleteProduct: (product: ProductType) => void;
    isOpen: boolean;
    toggleCart: () => void;

}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            addProduct: (product) =>
                set((state) => {
                    const existingProduct = state.cart.find((p) => p.id === product.id);
                    if (existingProduct) {
                        const updatedCart = state.cart.map((p) => {
                            if (p.id === product.id) {
                                return { ...p, quantity: p.quantity ? p.quantity + 1 : 1 }
                            }
                            return p;
                        });
                        return { cart: updatedCart };
                    } else {
                        return { cart: [...state.cart, { ...product, quantity: 1 }] };
                    }
                }),
            removeProduct: (product) =>
                set((state) => {
                    const existingProduct = state.cart.find((p) => p.id === product.id);
                    if (existingProduct && existingProduct.quantity! > 1) {
                        const updatedCart = state.cart.map((p) => {
                            if (p.id === product.id) {
                                return { ...p, quantity: p.quantity! - 1 };
                            }
                            return p
                        });
                        return { cart: updatedCart };
                    } else {
                        const filteredCart = state.cart.filter((p) => p.id !== product.id);
                        return { cart: filteredCart };
                    }
                }),
            deleteProduct: (product) =>
                set((state) => {
                    // Filtra o produto com o id igual ao passado, removendo-o completamente
                    const filteredCart = state.cart.filter((p) => p.id !== product.id);
                    return { cart: filteredCart };
                }),
            isOpen: false,
            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
        }), { name: "cart-storage" })
);