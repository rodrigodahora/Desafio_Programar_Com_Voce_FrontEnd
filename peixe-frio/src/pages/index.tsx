import styles from "@/styles/Home.module.scss";
import Layout from "@/components/Layout";
import Product from "@/components/Product";
import Side from "@/components/Side";
import Modal from "@/components/Modal"
import { useState } from "react";



export default function Home() {
  const [open, setOpen] = useState(false);

  function hendleSelectProduct() {
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
            <Product handleSelectProduc={handleSelectProduct} />

          </div>
        </div>
        <Modal open={open} handleClose={handleClose} />
      </>
    </Layout>

  )
}
