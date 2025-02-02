import styles from "./SignUp.module.scss";
import "@/styles/Buttons.scss";
import Link from "next/link";

export default function SignUp() {

    return (

        <div className={styles.container_main}>
            <img className={styles.logo} src="/logo.png" alt="logo" />
            <h2>Login</h2>
            <form className={styles.form_container} action="">
                <input placeholder="Nome" type="text" />
                <input placeholder="Email" type="email" />
                <input placeholder="Senha" type="password" />
                <div className={styles.button_container}>

                    <button className="button_buy">Cadastrar</button>
                    <Link className={styles["link"]} href="/"><button className="cancel_button">Cancelar</button></Link>

                </div>

            </form>

        </div>


    )
}