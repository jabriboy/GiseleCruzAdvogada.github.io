import ArtigoComponent from "../components/ArtigoComponent";
import WppButton from "../components/WppButton";
import '../styles/pages/Home.css'
import logo from '../assets/logoGC.png'
import foto2 from '../assets/foto2.png'
import foto1 from '../assets/foto1.png'

function Home(){
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
            <div className="left">
                <h1>sobre mim</h1>
                <p className="sobre-mim-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam, facilis dolore qui tempora at sit hic. Dicta voluptate tempore laborum non ab nesciunt quod nobis magnam debitis est consequatur temporibus, cumque velit quos eligendi. Suscipit, magnam alias aliquam unde quia molestias delectus omnis quod molestiae enim voluptatibus distinctio laborum sequi velit aut commodi animi dolores natus? Id, eaque. Sunt itaque quidem tempore, consequuntur ullam voluptates repellendus a quisquam explicabo facilis eveniet dolore ad ex sed iste beatae nulla perspiciatis assumenda tempora iusto saepe nemo! Aspernatur voluptatum provident sit dignissimos veniam, doloremque maxime voluptatem praesentium libero. Obcaecati quo velit culpa!
                </p>
                <WppButton/>
            </div>
            <div className="right">
                <img src={foto2} alt="segunda foto" />
            </div>
        </div>

        <div className="artigos">
            <h1>artigos</h1>
            <div className="banners-artigos">
                <ArtigoComponent/>
                <ArtigoComponent/>
            </div>
            <a href="#">
                <div className="ver-todos">
                    <p>ver todos</p>
                </div>
            </a>
        </div>
        </>
    )
}

export default Home;