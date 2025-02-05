import { useCartStore } from "../../store";
import styles from "@/components/Cart/Cart.module.scss";
import { useState } from "react";

const CartSummary = () => {
    const totalAmount = useCartStore((state) => state.totalAmount)
    const cartItems = useCartStore((state) => state.cart);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const openModal = () => setIsModalOpen(true);


    const closeModal = () => setIsModalOpen(false);


    const handleFinalizePurchase = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !address || !email) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        try {

            const verifyUserResponse = await fetch("http://localhost:8080/verifyUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({ name, email }),
            });

            const verifyUserData = await verifyUserResponse.json();

            if (!verifyUserResponse.ok) {
                setMessage(verifyUserData.message || "Usuário ou email inválido!");
                return;
            }

            const cartItemsData = cartItems.map(item => ({
                productId: item.id,
                quantity: item.quantity
            }))


            const finalizePurchaseResponse = await fetch("http://localhost:8080/finalizePurchase", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({ name, email, address, cartItems: cartItemsData }),
            });


            const finalizePurchaseData = await finalizePurchaseResponse.json();

            if (finalizePurchaseResponse.ok) {
                alert("Compra finalizada com sucesso!");
                useCartStore.getState().clearCart();
                closeModal();
            } else {
                setMessage(finalizePurchaseData.message || "Erro ao processar a compra");
            }

        } catch (error) {
            console.error(error);
            setMessage("Ocorreu um erro ao tentar finalizar a compra.");
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.summary_container}>
                <h3>Resumo da Compra</h3>
                <h4>Total: R${totalAmount.toFixed(2)}</h4>
            </div>
            <div className={styles.button_container}>
                <button onClick={openModal}>Comprar</button>
            </div>

            {isModalOpen && (
                <div className={styles.modal_overlay}>
                    <div className={styles.modal_content}>
                        <h3>Preencha seus dados para finalizar a compra</h3>

                        <form onSubmit={handleFinalizePurchase} className={styles.form_container}>
                            <input
                                type="text"
                                placeholder="Nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={styles.input_field}
                            />
                            <input
                                type="text"
                                placeholder="Endereço"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className={styles.input_field}
                            />
                            <input
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.input_field}
                            />

                            {message && <p className={styles.error_message}>{message}</p>}

                            <div className={styles.modal_buttons}>
                                <button type="button" onClick={closeModal}>Fechar</button>
                                <button type="submit">Finalizar Compra</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartSummary;
