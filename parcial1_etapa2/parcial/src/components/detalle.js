import './styles/detalle.css';
import { FormattedMessage } from 'react-intl';

function Detalle({ carro }){
    return (
        <div id="detail__container">
            <h1 id='car__title'>{carro.marca} {carro.linea}</h1>
            <img id='car__image' src={carro.imagen} alt={carro.marca}/>
            <ul>
                <li className='car__info'> 
                    <FormattedMessage id='Kilometraje'/>: {carro.kilometraje}
                </li>
                <li className='car__info'>
                    <FormattedMessage id='Color'/>: {carro.color}
                </li>

                <li className='car__info'>
                    <FormattedMessage id='Reference'/>: {carro.referencia}
                </li>
            </ul>
        </div>
    );
}

export default Detalle;