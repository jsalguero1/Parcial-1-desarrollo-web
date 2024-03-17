import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Detalle from './detalle';

function Listado({ vehicles }){

    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const handleRowClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    };


  return ( 
    <div>
<Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Marca</th>
            <th>Línea</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id} onClick={() => handleRowClick(vehicle)}>
              <td>{vehicle.id}</td>
              <td>{vehicle.marca}</td>
              <td>{vehicle.linea}</td>
              <td>{vehicle.modelo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedVehicle && <Detalle vehicle={selectedVehicle} />}
      </div> 
  );
};

export default Listado;
