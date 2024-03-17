import React from 'react';
import Card from 'react-bootstrap/Card';

function Detalle({ vehicle }) {

  return (
    <Card>
      <Card.Img variant="top" src={vehicle.imagen} />
      <Card.Body>
        <Card.Title>{`${vehicle.marca} ${vehicle.linea}`}</Card.Title>
        <Card.Text>
          Kilometraje: {vehicle.kilometraje} <br />
          Color: {vehicle.color} <br />
          Referencia: {vehicle.referencia}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Detalle;