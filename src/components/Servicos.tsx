import logo from '../assets/logoGC.png'
import logoEscuro from '../assets/logoGC-escuro.png'
import WppButton from './WppButton';

function Servicos(){
    return(
        <>
        <div className="servicos">
            <h1>serviços</h1>
            <div className="banners">
                <div className="serv1">
                    <img src={logoEscuro} alt="logo" />
                    <h2>serviço 1</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, sequi.
                    </p>
                </div>
                <div className="serv2">
                    <img src={logoEscuro} alt="logo" />
                    <h2>serviço 2</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, sequi.
                    </p>
                </div>
                <div className="serv3">
                    <img src={logoEscuro} alt="logo" />
                    <h2>serviço 3</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, sequi.
                    </p>
                </div>
            </div>
            <p className="about-servicos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti, ex quibusdam, ab fugit repudiandae at officiis hic magni dolore maiores eaque doloremque veritatis accusamus. Nam enim eius, eos atque, modi dolor delectus quam, ullam fugit magni neque illo hic molestias totam ab soluta! Necessitatibus sapiente atque tempora? Assumenda, odit?
            </p>
            <WppButton/>
        </div>
        </>
    )
}

export default Servicos;