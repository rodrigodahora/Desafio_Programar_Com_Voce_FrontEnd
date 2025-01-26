import styles from "@/styles/Home.module.scss";
import Layout from "@/components/Layout";
import Product from "@/components/Product";
import Side from "@/components/Side";



export default function Home() {
  return (
    <Layout>
      <div className={styles.container_main}>

        <div className={styles.side_container}>
          <Side />
        </div>

        <div className={styles.product_container}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

      </div>
    </Layout>

  )
}
