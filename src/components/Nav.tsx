import '../styles/components/NavBarStyle.css'
import WppButton from './WppButton';
import logo from '../assets/logoGC.png'
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <>
        <nav>
            <ul>
                <li className='logo-nome'><Link to={"/"}>Gisele Cruz | advogada do consumidor</Link></li>
                <li className="nav-logo"><Link to={"/"}><img src={logo} alt="logo GC" /></Link></li>
                <li><WppButton/></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav;