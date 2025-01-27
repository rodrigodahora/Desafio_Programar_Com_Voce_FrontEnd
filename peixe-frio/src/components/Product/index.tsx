import styles from "./Product.module.scss"
import "../../styles/Custom-classes.scss";
import { ProductType } from "@/types/ProductType";

interface IProps {
    product: ProductType;
    handleSelectProduct: (product: ProductType) => void;
}

function Product({ handleSelectProduct, product }: IProps) {
    return (
        <div className={styles.container} onClick={() => handleSelectProduct(product)}>
            <img src={product.image} alt="Product" />

            <div className="prices">
                <h4>{product.name}</h4>
                <div className={styles.title}>
                    <h4>PREÇO</h4>
                    <span>1KG</span>
                </div>

                <h3>R$ {product.currentPrice}</h3>
            </div>

        </div>
    );
}

export default Product;