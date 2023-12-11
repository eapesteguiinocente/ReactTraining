import React from 'react';
import './App.css';
import Drone from './components/Drone';

const listaDrones = [
  {
    name: 'DJI Mavic Air 2',
    model: 'Mavic Air 2',
    price: 799
  },
  {
    name: 'Parrot Anafi',
    model: 'Anafi',
    price: 699
  },
  {
    name: 'Autel Robotics EVO II',
    model: 'EVO II',
    price: 1495
  },
  {
    name: 'Skydio 2',
    model: 'Skydio 2',
    price: 999
  },
  {
    name: 'Yuneec Typhoon H3',
    model: 'Typhoon H3',
    price: 2499
  },
  {
    name: 'Holy Stone HS720E',
    model: 'HS720E',
    price: 339
  },
];

function App() {
  return (
    <div>
      <h1 className="App">Catálogo de Drones</h1>
      <ul>
        {listaDrones.map((drone) => (
          <Drone
            name={drone.name}
            model={drone.model}
            price={drone.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
