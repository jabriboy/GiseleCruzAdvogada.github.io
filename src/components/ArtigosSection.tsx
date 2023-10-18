import { Link } from "react-router-dom";
import { artigo } from '../artigo-documents/artigo1'
import { artigo2 } from '../artigo-documents/artigo2'

import ArtigoComponent from "../components/ArtigoComponent";

function ArtigosSection(){
    const artigos = [artigo, artigo2];

    return(
        <>
        <div className="artigos">
            <h1>artigos</h1>
            <div className="banners-artigos">
            {artigos.map((artigo) => {
                return <ArtigoComponent key={artigo.titulo} titulo={artigo.titulo} img={artigo.img} sobre={artigo.sobre} desc={artigo.description}/>
            })}
            </div>
            <div className="ver-todos">
                <Link to={"/todos-artigos"}><p>ver todos</p></Link>
            </div>
        </div>
        </>
    )
}

export default ArtigosSection;