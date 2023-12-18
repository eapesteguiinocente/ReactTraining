import React from 'react';
import './App.css';
import Vehiculo from './components/Vehiculo';

const listaVehiculos = [
  {
    name: 'Carro',
    model: 'Toyota',
    price: '65,000',
    imageUrl: 'https://www.toyotaperu.com.pe/sites/default/files/camionet-raize.png',
  },
  {
    name: 'Moto',
    model: 'Davest',
    price: '5,000',
    imageUrl: 'https://motosdavest.com/wp-content/uploads/2020/07/DV250R9-ROJA-2.jpg',
  },
  {
    name: 'Avion',
    model: 'Boeing 737',
    price: '82 millones',
    imageUrl: 'https://news.delta.com/sites/default/files/styles/google_news_1200x675/public/2022-07/boeing_737_max_hero.jpg?itok=f2zT1mZd',
  },
  {
    name: 'Barco',
    model: 'BOKA VANGUARD',
    price: '240 millones',
    imageUrl: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/01/boka-vanguard-barco-transporta-transatlanticos-1845659.jpg?tf=3840x',
  },
  {
    name: 'Yate',
    model: 'Sunseeker',
    price: '15 millones',
    imageUrl: 'https://okdiario.com/coolthelifestyle/img/2021/06/19/sunseeker_133yacht_exterior_render14-1280x840-1.jpeg',
  },
  {
    name: 'Bicicleta',
    model: 'MONARK',
    price: 539,
    imageUrl: 'https://www.monark.com.pe/wp-content/uploads/2021/05/Traction-XT-%E2%80%93-Aro-26-%E2%80%93-Blanco_01.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <h1>Catálogo de Vehiculos</h1>
      <div>
        {listaVehiculos.map((item) => (
          <Vehiculo
            name={item.name}
            model={item.model}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
