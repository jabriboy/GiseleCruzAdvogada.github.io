import '../styles/pages/Home.css'
import Hero from "../components/Hero";
import Servicos from "../components/Servicos";
import SobreMim from "../components/SobreMim";
import ArtigosSection from '../components/ArtigosSection';

function Home(){

    return(
        <>
        <Hero/>
        <SobreMim/>
        <Servicos/>
        <ArtigosSection/>
        </>
    )
}

export default Home;