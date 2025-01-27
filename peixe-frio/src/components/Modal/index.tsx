import styles from "./Modal.module.scss"
import "@/styles/Buttons.scss"

interface IProps {
    open: boolean;
    handleClose: () => void;
}

function Modal({ open, handleClose }: IProps) {
    return (
        <>
            {open && (
                <div className={styles.container}>
                    <div className={styles.modal}>
                        <img src="./close_img.png" alt="close" className={styles.close} />
                        <div className={styles['modal_body']}>
                            <img className={styles["product_img"]} src="https://static.wixstatic.com/media/d11da1_7a7d5efd3c414020889f796b63b787ba~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d11da1_7a7d5efd3c414020889f796b63b787ba~mv2.jpg" alt="Product" />
                        </div>
                        <div className={styles["container_title"]}>
                            <h3>Nome do Produto</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil dolor atque,
                                laudantium explicabo laboriosam voluptatibus! Labore quaerat quod consectetur.</p>
                        </div>
                        <div className={styles['container_buy']}>
                            <button className="button_buy">Adicionar</button>
                            <h3>R$80,00</h3>

                        </div>

                    </div>

                </div>
            )}
        </>
    )
}

export default Modal;