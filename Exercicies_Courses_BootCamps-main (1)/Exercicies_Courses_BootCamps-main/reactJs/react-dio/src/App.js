import Item from './components/Item/index';
import ButtonSuccess from './components/Button/button';
import ButtonDanger from './components/Button/buttonDanger';
import Card from './components/Card/index';
import Welcome from './components/h1/welcome';
const App = () => {
  return(
      <>
        <h1>Componentes com react</h1>
        <Welcome name="Débora">
        </Welcome>
        <Item className="list-group-item list-group-item-action list-group-item-info">
          Item 1
        </Item>
        <Item className="list-group-item list-group-item-action list-group-item-warning">
          Item 2
        </Item>
        <Item className="list-group-item list-group-item-action list-group-item-dark">
          Item 3
        </Item>
        <Item className="list-group-item list-group-item-action list-group-item-primary">
          Item 4
        </Item>
        <Card/>
        <ButtonSuccess/>
        <ButtonDanger/>
      </>
  )
}
export default App;
/**
 * index.js 
 * {props.texto}
 *      <Item texto = 'item1'/>
        <Item texto = 'item2'/>
        <Item texto = 'item3'/> 
 */