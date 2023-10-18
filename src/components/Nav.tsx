import '../styles/components/NavBarStyle.css'
import WppButton from './WppButton';
import logo from '../assets/logoGC-escuro.png'
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <>
        <nav>
            <ul>
                <li className='logo-nome'><Link to={"/"}>gisele cruz | advogada do consumidor</Link></li>
                <li className="nav-logo"><a href="#"><img src={logo} alt="logo GC" /></a></li>
                <li><WppButton/></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav;