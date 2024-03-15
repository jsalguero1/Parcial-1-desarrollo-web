import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import Listado from './listado';

function FormComponent() {
  const vehiclesData = [
    {
      "id": 1,
      "marca": "Renault",
      "linea": "Kangoo",
      "referencia": "VU Express",
      "modelo": 2017,
      "kilometraje": 93272,
      "color": "Blanco",
      "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/kangoo.jpeg?raw=true"
    },
    {
      "id": 2,
      "marca": "Chevrolet",
      "linea": "Spark",
      "referencia": "Life",
      "modelo": 2018,
      "kilometraje": 55926,
      "color": "Plata",
      "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/spark.jpeg?raw=true"
    }
  ];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const staticUsername = 'admin';
    const staticPassword = 'pass';

    if (username === staticUsername && password === staticPassword) {
      setIsLoggedIn(true);
    } else {
      setError(true);
    }
  };

  if (isLoggedIn) {
    return <Listado vehicles={vehiclesData} />;
  }

  return (
    <Container className="mt-5">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
        <Button variant="secondary" type="button" className="ms-2">
          Cancelar
        </Button>

        {error && (
          <div className="text-danger d-block mt-3">
            Error: Las credenciales son incorrectas.
          </div>
        )}
      </Form>
    </Container>
  );
}

export default FormComponent;


