import '../styles/components/NavBarStyle.css'
import WppButton from './WppButton';
import logo from '../assets/logoGC-escuro.png'

function Nav(){
    return(
        <>
        <nav>
            <ul>
                <li className='logo-nome'><a href="#">gisele cruz | advogada do consumidor</a></li>
                <li className="nav-logo"><a href="#"><img src={logo} alt="logo GC" /></a></li>
                <li><WppButton/></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav;