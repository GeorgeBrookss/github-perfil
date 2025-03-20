import styles from './Perfil.module.css'


const Perfil = ({ nomeUsuario, nome }) => {

    return (
        <header className={styles.header}>
        <img className={styles.avatar} src= {`https://github.com/${nomeUsuario}.png`} alt="" />
        <h3 className={styles.name}>{nomeUsuario}</h3>

        </header>
    )
}

export default Perfil;
