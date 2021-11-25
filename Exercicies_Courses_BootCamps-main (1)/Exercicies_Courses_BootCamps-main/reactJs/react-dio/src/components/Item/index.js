//Replicação com react
// compontente  dentro de componentes 
/**Quando temos que replicar uma lista por exemplo, para que não fique verboso de mais 
 * Os componentes podem ser replicados 
 */
//{props.texto}
/**
 * Atributo texto
 * {} = para chamar uma variavel ou um objeto em react
*/
//desestruturação  
// cont Item = (props) => {}
const Item = ({children, className}) => { 
    return (
        <a  
            className={className}
        >  
        {children} 
        </a>    
    )
}       

export default Item;