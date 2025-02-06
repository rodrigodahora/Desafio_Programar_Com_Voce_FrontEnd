import styles from "@/components/Layout/Layout.module.scss";
import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index"
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