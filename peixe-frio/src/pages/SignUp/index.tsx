import styles from "./SignUp.module.scss";
import "@/styles/Buttons.scss";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !email || !password) {
            setMessage("Por Favor, preencha todos os campos!");
        }

        try {

            const response = await fetch("http://localhost:8080/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Usuário cadastrado com sucesso!");
                setTimeout(() => {
                    window.location.reload();
                }, 1000)
            } else {
                setMessage(data.message || "Erro ao cadastrar usuário!")
            }

        } catch (error) {
            console.error(error);
            setMessage("Ocorreu um erro ao registrar. Tente novamente!")

        }
    }


    return (

        <div className={styles.container_main}>
            <img className={styles.logo} src="/logo.png" alt="logo" />
            <h2>Registre-se</h2>
            <form className={styles.form_container} onSubmit={handleSubmit}>
                <input placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {message && <p className={styles.message}>{message}</p>}
                <div className={styles.button_container}>
                    <button className="button_buy">Cadastrar</button>
                    <Link className={styles["link"]} href="/"><button className="cancel_button">Cancelar</button></Link>

                </div>

            </form>

        </div>


    )
}