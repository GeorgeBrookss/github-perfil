import { useEffect, useState } from "react";
import styles from './Reposlist.module.css';



const ReposList = ({ nomeUsuario }) => {

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true)
    const [deuErro, setDeuErro] = useState(false)


    useEffect(() =>{
        
        setDeuErro(false)

        setEstaCarregando(true);
        
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
        if(!res.ok){
            throw new Error (`Erro ao buscar ${res.statusText}`)
            }
            return res.json()
        })
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando (false)
                setRepos(resJson);

            }, 1000);
        } )
        .catch(e  => {
            setDeuErro(true)
            console.log('deu erro ao buscar os repositorios', e)
        })

    

    }, [nomeUsuario])

    return (
        <div className="container">
    
        {estaCarregando ? (        
            <h1>Loading...</h1>
): <ul className={styles.list}>
{repos.map(( { id, name, language, html_url }) => (
    <li className={styles.itemName} key={id}>
        <b className={styles.listItem}>Nome: </b>{name}
        <br />
        <b className={styles.itemLanguage}> Linguagem: </b>{language}
        <br />
        <a className={styles.itemLink} target="blank" href={html_url}> Visitar no Github</a>
        <br />
        <br />
    </li>
))}
</ul>
}
        
        </div>
            )
}

export default ReposList;