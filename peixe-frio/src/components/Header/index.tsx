/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import styles from "@/components/Header/Header.module.scss";
import Link from "next/link";
import { useCartStore } from "@/store";
import Cart from "../Cart/Cart";

function Header() {
    const useStore = useCartStore();

    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const storedUserName = localStorage.getItem("userName");
        if (storedUserName) {
            setUserName(storedUserName);
        }

    }, []);

    const handleCartClick = () => {
        window.location.href = "/CartMarket"
    }

    const handleSignClick = () => {
        window.location.href = "/SignIn"
    }

    return (
        <header className={styles.header}>
            <Link href="/"><img className={styles.logo} src="/logo.png" alt="logo" /></Link>
            <img className={styles.menu} src="/menu.png" alt="Menu" />
            <input className={styles.search} type="text" />
            <img className={styles.lupa} src="/lupa.png" alt="lupa" />
            <div className={styles.user_container} onClick={handleSignClick}>
                <img className={styles.user_img} src="/user.png" alt="user" />
                <p>{userName ? `Bem vindo ${userName} ` : "Bem vindo, Acesse seu perfil"}</p>
            </div>
            <Cart />

        </header>
    )
}

export default Header;