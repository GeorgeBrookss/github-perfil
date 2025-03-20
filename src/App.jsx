import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/RepoList";
function App() {

  const [nomeUsuario, setNomeUsuario] = useState('')

  return(
    <>
    <div className="inputNome">
      Digite Seu Nome de Usuário Github: 
      <br />
    <input  type="text" onBlur={(e) => setNomeUsuario (e.target.value)} />
    </div>

      {nomeUsuario.length > 4 && (
        
        <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario}/>
        </>

      )}

      
{/*       
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle From</button>

      {formularioEstaVisivel &&(
              <Formulario/>
              
      )} */}

    </>

  )
}

export default App
