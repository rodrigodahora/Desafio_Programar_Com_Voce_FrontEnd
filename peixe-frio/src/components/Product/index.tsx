import styles from "./Product.module.scss"
import "../../styles/Custom-classes.scss";

interface IProps {
    handleSelectProduct: () => void;
}

function Product({ handleSelectProduct }: IProps) {
    return (
        <div className={styles.container} onClick={handleSelectProduct}>
            <img src="https://static.wixstatic.com/media/d11da1_7a7d5efd3c414020889f796b63b787ba~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d11da1_7a7d5efd3c414020889f796b63b787ba~mv2.jpg" alt="Product" />

            <div className="prices">
                <h4>Ostra</h4>
                <div className={styles.title}>
                    <h4>PREÇO</h4>
                    <span>1KG</span>
                </div>

                <h3>R$80,00</h3>
            </div>

        </div>
    );
}

export default Product;