import styles from "@/styles/SignIn.module.scss";
import "@/styles/Buttons.scss"
import Link from "next/link";

export default function SignIn() {

    return (

        <div className={styles.container_main}>
            <Link href="/"><img className={styles.logo} src="/logo.png" alt="logo" /></Link>

            <h2>Login</h2>
            <form className={styles.form_container} action="">
                <input placeholder="Email" type="email" />
                <input placeholder="Senha" type="password" />
                <Link className={styles["link"]} href="/SignUp">Registre-se</Link>
                <button className="button_buy">Entrar</button>

            </form>

        </div>


    )
}

