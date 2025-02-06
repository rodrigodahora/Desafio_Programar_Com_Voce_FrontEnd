import styles from "@/components/Layout/Layout.module.scss";
import Header from "../Header/";
import Footer from "../Footer/"

interface IProps {
    children: React.ReactNode;
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