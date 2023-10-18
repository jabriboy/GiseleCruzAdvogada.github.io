import WppButton from "../components/WppButton";
import foto2 from '../assets/foto2.png'

function SobreMim(){
    return(
        <>
        <div className="sobre-mim">
            <div className="sobre-mim-inner">
                <div className="left">
                    <div className="block-content">
                        <h1>sobre mim</h1>
                        <p className="sobre-mim-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam, facilis dolore qui tempora at sit hic. Dicta voluptate tempore laborum non ab nesciunt quod nobis magnam debitis est consequatur temporibus, cumque velit quos eligendi. Suscipit, magnam alias aliquam unde quia molestias delectus omnis quod molestiae enim voluptatibus distinctio laborum sequi velit aut commodi animi dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam.
                        </p>
                        <WppButton/>
                    </div>
                </div>
                <div className="right">
                    <img src={foto2} alt="segunda foto" />
                </div>
            </div>
        </div>
        </>
    )
}

export default SobreMim;