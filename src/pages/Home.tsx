import ArtigoComponent from "../components/ArtigoComponent";
import WppButton from "../components/WppButton";
import '../styles/pages/Home.css'
import logo from '../assets/logoGC.png'
import foto2 from '../assets/foto2.png'
import foto1 from '../assets/foto1.png'
import { Link } from "react-router-dom";
import { artigo } from '../artigo-documents/artigo1'
import { artigo2 } from '../artigo-documents/artigo2'

function Home(){
    const artigos = [artigo, artigo2];

    return(
        <>
        <div className="hero">
            <div className="left">
                <img src={foto1} alt="foto de perfil" />
            </div>
            <div className="right">
                <img src={logo} alt="logo GC" />
                <h1>gisele cruz</h1>
                <h3>advogada</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, magni?</p>
                <div className="seta"></div>
            </div>
        </div>

        <div className="servicos">
            <h1>serviços</h1>
            <div className="banners">
                <div className="serv1">
                    <img src={logo} alt="logo" />
                    <h2>serviço 1</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, sequi.
                    </p>
                </div>
                <div className="serv2">
                    <img src={logo} alt="logo" />
                    <h2>serviço 2</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, sequi.
                    </p>
                </div>
                <div className="serv3">
                    <img src={logo} alt="logo" />
                    <h2>serviço 3</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, sequi.
                    </p>
                </div>
            </div>
            <p className="about-servicos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti, ex quibusdam, ab fugit repudiandae at officiis hic magni dolore maiores eaque doloremque veritatis accusamus. Nam enim eius, eos atque, modi dolor delectus quam, ullam fugit magni neque illo hic molestias totam ab soluta! Necessitatibus sapiente atque tempora? Assumenda, odit?
            </p>
        </div>

        <div className="sobre-mim">
            <h1>sobre mim</h1>
            <div className="sobre-mim-inner">
                <div className="left">
                    <div className="block-content">
                        <p className="sobre-mim-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam, facilis dolore qui tempora at sit hic. Dicta voluptate tempore laborum non ab nesciunt quod nobis magnam debitis est consequatur temporibus, cumque velit quos eligendi. Suscipit, magnam alias aliquam unde quia molestias delectus omnis quod molestiae enim voluptatibus distinctio laborum sequi velit aut commodi animi dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam, facilis dolore qui tempora at sit hic. Dicta voluptate tempore laborum non ab nesciunt quod nobis magnam debitis est consequatur temporibus, cumque velit quos eligendi. Suscipit, magnam alias aliquam unde quia molestias delectus omnis quod molestiae enim voluptatibus distinctio laborum sequi velit aut commodi animi dolores.
                        </p>
                        <WppButton/>
                    </div>
                </div>
                <div className="right">
                    <img src={foto2} alt="segunda foto" />
                </div>
            </div>
        </div>

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

export default Home;