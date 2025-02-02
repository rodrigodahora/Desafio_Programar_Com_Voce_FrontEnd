import styles from "./Cart.module.scss";
import Layout from "@/components/Layout";


export default function Cart() {

  return (
    <Layout>
      <main>

        <div className={styles.container_main}>
          <h2>Carrinho</h2>
          <div className={styles.container_cart}>
            <section>
              <table>
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                    <th>-</th>
                  </tr>
                </thead>
              </table>

            </section>
            <aside>

            </aside>
          </div>

        </div>

      </main>


    </Layout>

  )
}
