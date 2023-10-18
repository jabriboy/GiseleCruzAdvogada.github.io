import ArtigoComponent from "../components/ArtigoComponent";
import "../styles/pages/Artigos.css"
import { artigo } from "../artigo-documents/artigo1";
import { artigo2 } from "../artigo-documents/artigo2";
import BtnVoltar from "../components/BtnVoltar";

function Artigos(){
    const artigos = [artigo, artigo2];
    return(
        <>
        <h1 className="artigos">artigos</h1>
        <div className="todos-artigos">
            {artigos.map((artigo) => {
                return <ArtigoComponent key={artigo.titulo} sobre={artigo.sobre} titulo={artigo.titulo} img={artigo.img} desc={artigo.description}/>
            })}
        </div>
        <BtnVoltar path={"/"}/>
        </>
    )
}

export default Artigos;