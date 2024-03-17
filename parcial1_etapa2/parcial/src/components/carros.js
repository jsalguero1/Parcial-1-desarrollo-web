import './styles/carros.css';
import { useEffect, useState } from 'react';
import Detalle from './detalle';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';

function Carros() {

    // estado para lista de carros
    const [cars, setCars] = useState([]);

    // Estado para detalle de carro
    const [carro, setCarro] = useState(null);

    // Función para obtener lista de carros
    useEffect(() => {
        
        const fetchCars = async () => {
            try {
                const response = await axios.get('http://localhost:3001/cars');
                setCars(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
    
        fetchCars();
    }, []);


    return (
        <div id='container'>
            <table className='table__container'>
                <thead>
                    <tr id='table__headers__container'>
                        <th className='table__header'>#</th>
                        <th className='table__header'>
                            <FormattedMessage id="Marca"/>
                        </th>
                        <th className='table__header'>
                            <FormattedMessage id="Línea"/>
                        </th>
                        <th className='table__header'>
                            <FormattedMessage id="Modelo"/>
                        </th>
                    </tr>
                </thead>
                <tbody id='table__body__container'>
                    {cars.map((carro, index) => (
                        <tr key={index} id='table__data__container' onClick={(e) => setCarro(carro)}>
                            <td>{index + 1}</td>
                            <td>{carro.marca}</td>
                            <td>{carro.linea}</td>
                            <td>{carro.modelo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>{carro && <Detalle carro={carro}/>}</h2>
        </div>
    );
}

export default Carros;