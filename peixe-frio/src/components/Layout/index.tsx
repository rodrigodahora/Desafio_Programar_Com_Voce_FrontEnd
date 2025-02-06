import styles from "@/components/Layout/Layout.module.scss";
import Header from "../Header/index";
import Footer from "../Footer/index"
import { JSX } from "react";

interface IProps {
    children: JSX.Element;
}

function Layout({ children }: IProps) {
    return (
        <main className={styles.container}>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </main>
    )
}

export default Layout;