import styles from "@/components/Layout/";
import Header from "../Header/";
import Footer from "../Footer/"
import JSX from "react";

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