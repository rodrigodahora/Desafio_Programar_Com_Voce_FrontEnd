/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "@/pages/SignIn/SignIn.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        try {
            const response = await fetch("https://desafio-programar-com-voce-api.onrender.com/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("userName", data.name);
                router.push("/");
            } else {

                setErrorMessage(data.message || "Error when logging in")
            }

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setErrorMessage("Error when trying to connect to the server. Please try again.")
        }
    }

    return (

        <div className={styles.container_main}>
            <Link href="/"><img className={styles.logo} src="/logo.png" alt="logo" /></Link>

            <h2>Login</h2>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            <form className={styles.form_container} onSubmit={handleSubmit}>
                <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <Link className={styles["link"]} href="/SignUp">Registre-se</Link>
                <button className={styles.button_buy}>Entrar</button>

            </form>

        </div>


    )
}



