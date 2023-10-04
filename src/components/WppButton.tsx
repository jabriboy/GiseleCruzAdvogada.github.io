import '../styles/components/WppButtonStyle.css'
import wpp from '../assets/whatsapp-logo.png'

function WppButton(){
    return(
        <>
        <a href="#">
            <div className="content">
                <img src={wpp} alt="whatsapp logo" />
                <p>fale comigo</p>
            </div>
        </a>
        </>
    )
}

export default WppButton;