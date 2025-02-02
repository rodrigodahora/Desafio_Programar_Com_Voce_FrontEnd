import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

function Header() {
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
            <div className={styles.cart_container} onClick={handleCartClick}>
                <img className={styles.cart_img} src="/cart.png" alt="user" />
                <p>Carrinho</p>
            </div>

        </header>
    )
}

export default Header;