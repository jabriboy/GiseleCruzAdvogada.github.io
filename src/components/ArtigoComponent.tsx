import '../styles/components/ArtigoComponentStyle.css'
import '../artigo-documents/artigo1'
import { Link } from 'react-router-dom'

function ArtigoComponent(props: any){
    return(
        <>
        <div className="artigo-banner">
            <Link to={"/artigo"} state={{artigo: props}} >
                <img src={props.img} alt="artigo" />
                <h2>{props.titulo}</h2>
                <p className="description">{props.sobre}</p>
            </Link>
        </div>
        </>
    )
}

export default ArtigoComponent;