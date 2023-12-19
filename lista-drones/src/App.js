import React from 'react';
import './App.css';
import Vehiculo from './components/Vehiculo';

const listaVehiculos = [
  {
    name: 'Carro',
    model: 'Terrestre'
  },
  {
    name: 'Moto',
    model: 'Terrestre'
  },
  {
    name: 'Avion',
    model: 'Aéreo'
  },
  {
    name: 'Barco',
    model: 'Marítimo'
  },
  {
    name: 'Yate',
    model: 'Marítimo'
  },
  {
    name: 'Bicicleta',
    model: 'Terrestre',
  },
  {
    name: 'Avioneta',
    model: 'Aéreo',
  },
  {
    name: 'Crucero',
    model: 'Marítimo',
  },
  {
    name: 'Tren',
    model: 'Terrestre',
  },
  {
    name: 'Helicoptero',
    model: 'Aéreo',
  },
];

function App() {
  return (
    <div>
      <h1 className="App">Catálogo de Vehículos</h1>
      <ul>
        {listaVehiculos.map((item) => (
          <Vehiculo
            name={item.name}
            model={item.model}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
