import styles from "@/styles/Home.module.scss";
import Layout from "@/components/Layout";
import Product from "@/components/Product";
import Side from "@/components/Side";
import Modal from "@/components/Modal"
import { useState } from "react";
import { ProductType } from "@/types/ProductType";

interface IProps {
  items: ProductType[]
}

export default function Home({ items }: IProps) {
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<ProductType>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    image: 'string',
    quantity: 0,
    stockQuantity: 0
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
            {items.map((item) => (
              <Product handleSelectProduct={hendleSelectProduct} key={item.id} item={item} />
            ))}
          </div>
        </div>
        <Modal open={open} handleClose={handleClose} product={currentProduct} />
      </>
    </Layout>

  )
}

export const getStaticProps = async () => {
  const response = await fetch("https://desafio-programar-com-voce-api.onrender.com/products");
  const data = await response.json()

  const items = Array.isArray(data.items) ? [...data.items] : [];


  return {
    props: {
      items
    }
  };
};