import styles from "../Footer/Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.left_container}>
                <h2>Departamentos</h2>
                <span>Início</span>
                <span>Perfil</span>
                <span>Dúvidas</span>

            </div>

            <div className={styles.mid_container}>
                <h2>Entre em Contato</h2>

                <div className="wpp_div">
                    <img className={styles.wpp_img} src="./wpp-img.png" alt="local-img" />
                    <span>+55 (75)9 9964-0722</span>
                </div>

                <div className="email_div">
                    <img className={styles.email_img} src="./email_img.png" alt="email-img" />
                    <span>djalmamatogrosso@gmail.com</span>
                </div>

                <div className="local_div">
                    <img className={styles.local_img} src="./local_img.png" alt="" />
                    <span>Maragogipe/BA</span>
                </div>

            </div>
            <div className={styles.right_container}>
                <h2>Permaneça Conectado</h2>
                <div className={styles.social_midias}>
                    <img className={styles.insta_img} src="./insta_img.png" alt="instagram-img" />
                    <img className={styles.face_img} src="./face_img.png" alt="facebook-img" />

                </div>
            </div>

        </footer>
    )
}

export default Footer;