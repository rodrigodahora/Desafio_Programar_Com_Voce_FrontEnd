import styles from "@/components/Product/Product.module.scss";
import { ProductType } from "@/types/ProductType";

interface IProps {
    item: ProductType;
    handleSelectProduct: (item: ProductType) => void;
}

function Product({ handleSelectProduct, item }: IProps) {


    return (
        <div className={styles.container} onClick={() => handleSelectProduct(item)}>
            <img src={item.image} alt="Product" />

            <div className="prices">
                <h4>{item.name}</h4>
                <div className={styles.title}>
                    <h4>PREÇO</h4>
                    <span>1KG</span>
                </div>

                <h3>R$ {item.price.toFixed(2)}</h3>
            </div>

        </div>
    );
}

export default Product;