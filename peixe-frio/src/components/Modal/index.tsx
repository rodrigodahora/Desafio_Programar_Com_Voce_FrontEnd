import { ProductType } from "@/types/ProductType";
import styles from "@/components/Modal/Modal.module.scss";
import AddCart from "../Cart/AddCart";

interface IProps {
    product: ProductType;
    open: boolean;
    handleClose: () => void;
}

function Modal({ open, handleClose, product }: IProps) {
    return (
        <>
            {open && (
                <div className={styles.container}>
                    <div className={styles.modal}>
                        <img src="./close_img.png" alt="close" className={styles.close} onClick={handleClose} />
                        <div className={styles['modal_body']}>
                            <img className={styles["product_img"]} src={product.image} alt="Product" />
                        </div>
                        <div className={styles["container_title"]}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                        <div className={styles['container_buy']}>
                            <AddCart product={product} />
                            <h3>R$ {product.price}</h3>

                        </div>

                    </div>

                </div>
            )}
        </>
    )
}

export default Modal;