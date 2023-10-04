import '../styles/components/ArtigoComponentStyle.css'
import artigo from '../assets/artigo.png'

function ArtigoComponent(){
    return(
        <>
        <div className="artigo-banner">
            <a href="#">
                <img src={artigo} alt="artigo" />
                <h2>artigo 1</h2>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti odit nihil aliquam. Ipsa nihil atque aut, non sapiente odio!</p>
            </a>
        </div>
        </>
    )
}

export default ArtigoComponent;