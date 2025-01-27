import styles from "@/styles/Home.module.scss";
import Layout from "@/components/Layout";
import Product from "@/components/Product";
import Side from "@/components/Side";
import Modal from "@/components/Modal"
import { useState } from "react";
import { ProductType } from "@/types/ProductType";

interface IProps {
  shoes: ProductType[]
}

export default function Home({ shoes }: IProps) {
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<ProductType>({
    id: 0,
    name: '',
    image: '',
    description: '',
    currentPrice: 0
  });

  function hendleSelectProduct(product: ProductType): void {
    setCurrentProduct(product);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <Layout>
      <>

        <div className={styles.container_main}>

          <div className={styles.side_container}>
            <Side />
          </div>
          <div className={styles.product_container}>
            {shoes.map((shoe) => (
              <Product handleSelectProduct={hendleSelectProduct} key={shoe.id} product={shoe} />
            ))}
          </div>
        </div>
        <Modal open={open} handleClose={handleClose} product={currentProduct} />
      </>
    </Layout>

  )
}

export const getStaticProps = async () => {
  const response = await fetch("https://api-contacts.pedagogico.cubos.academy/shoes");
  const data = await response.json()

  return {
    props: {
      shoes: [...data]
    }
  };
};