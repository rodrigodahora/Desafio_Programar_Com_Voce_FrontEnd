import styles from "./Header.module.scss"
import logo from "../../../public/logo.png"

function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="/logo.png" alt="Logo" />
            <img className={styles.menu} src="/menu.png" alt="Menu" />
            <input className={styles.search} type="text" />
            <img className={styles.lupa} src="/lupa.png" alt="lupa" />
            <div className={styles.user_container}>
                <img className={styles.user_img} src="/user.png" alt="user" />
                <p>Bem vindo, Acesse seu Perfil</p>
            </div>
            <div className={styles.cart_container}>
                <img className={styles.cart_img} src="/cart.png" alt="user" />
                <p>Carrinho</p>
            </div>

        </header>
    )
}

export default Header;