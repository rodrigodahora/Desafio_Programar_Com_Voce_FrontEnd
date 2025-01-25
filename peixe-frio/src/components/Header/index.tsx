import styles from "./Header.module.scss"
import logo from "../../../public/logo.png"

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.logo} src="/logo.png" alt="Logo" />
            </div>
        </header>
    )
}

export default Header;