import '../styles/components/FooterStyle.css'
import wpp from '../assets/whatsapp-preenchido-logo.png'
import insta from '../assets/instagram-logo.webp'
import gmail from '../assets/gmail-logo.png'


function Footer(){
    return(
        <>
        <footer>
            <h1>contatos</h1>
            <ul>
                <li><a href="#"><img src={wpp} alt="whatsapp" /></a></li>
                <li><a href="#"><img src={insta} alt="instagram" /></a></li>
                <li><a href="#"><img src={gmail} alt="email" /></a></li>
            </ul>
        </footer>
        </>
    )
}

export default Footer;