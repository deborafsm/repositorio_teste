//useState tra uma variavel e uma função
import { useState } from 'react';
import ButtonSuccess from "../Button/button";
import ButtonDanger from "../Button/buttonDanger";

const Card = () => {
    const [valor, setValor] = useState(0)//Valor vai começar em zero
    function Adicionar (){
        setValor(valor + 1);
    }
    function Remover (){
        setValor(valor - 1)
    }
    return (
        <div className="card">
       
             <div className="card-body">
                <h5 className="card-title">Meu Card</h5>
                <ButtonSuccess onClick = {Adicionar}/>
                <p>{valor}</p>
                <ButtonDanger onClick = {Remover}/>
             </div>
        </div>

       //onClick = (event) => {setValor(event.target.value - 1)}
    )
}
export default Card;