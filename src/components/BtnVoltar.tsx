import { Link } from "react-router-dom";
import '../styles/components/BtnVoltarStyle.css'

function BtnVoltar(props: any){
    return(
        <>
        <Link to={props.path}>
            <div className="btn-back">
                <p>voltar</p>
            </div>
        </Link>
        </>
    )
}
export default BtnVoltar;