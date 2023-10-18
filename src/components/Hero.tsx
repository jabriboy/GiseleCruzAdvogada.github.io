import foto1 from '../assets/foto1.png'
import logo from '../assets/logoGC.png'

function Hero(){
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
        </>
    )
}

export default Hero;