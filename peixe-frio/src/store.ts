/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductType } from "@/types/ProductType";


type CartState = {
    cart: ProductType[];
    totalAmount: number;
    addProduct: (product: ProductType) => void;
    removeProduct: (product: ProductType) => void;
    deleteProduct: (product: ProductType) => void;
    clearCart: () => void;
    isOpen: boolean;
    toggleCart: () => void;

}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            totalAmount: 0,
            addProduct: (product) =>
                set((state) => {
                    const existingProduct = state.cart.find((p) => p.id === product.id);

                    if (existingProduct) {
                        const updatedCart = state.cart.map((p) => {
                            if (p.id === product.id) {
                                return { ...p, quantity: p.quantity ? p.quantity + 1 : 1 };
                            }
                            return p;
                        });

                        const newTotalAmount = updatedCart.reduce(
                            (total, p) => total + p.price * p.quantity!,
                            0
                        );

                        return { cart: updatedCart, totalAmount: newTotalAmount };
                    } else {
                        const updatedCart = [...state.cart, { ...product, quantity: 1 }];
                        const newTotalAmount = updatedCart.reduce(
                            (total, p) => total + p.price * p.quantity!,
                            0
                        );
                        return { cart: updatedCart, totalAmount: newTotalAmount };
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
                            return p;
                        });

                        const newTotalAmount = updatedCart.reduce(
                            (total, p) => total + p.price * p.quantity!,
                            0
                        );
                        return { cart: updatedCart, totalAmount: newTotalAmount };

                    } else {
                        const filteredCart = state.cart.filter((p) => p.id !== product.id);

                        const newTotalAmount = filteredCart.reduce(
                            (total, p) => total + p.price * p.quantity!,
                            0
                        );
                        return { cart: filteredCart, totalAmount: newTotalAmount };
                    }
                }),
            deleteProduct: (product) =>
                set((state) => {
                    const filteredCart = state.cart.filter((p) => p.id !== product.id);

                    const newTotalAmount = filteredCart.reduce(
                        (total, p) => total + p.price * p.quantity!,
                        0
                    );
                    return { cart: filteredCart, totalAmount: newTotalAmount };
                }),
            clearCart: () =>
                set(() => ({
                    cart: [],
                    totalAmount: 0
                })),
            isOpen: false,
            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
        }), { name: "cart-storage" })
);