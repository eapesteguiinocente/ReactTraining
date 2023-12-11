import React from 'react';
import './App.css';
import Drone from './components/Drone';

const listaDrones = [
  {
    name: 'DJI Mavic Air 2',
    model: 'Mavic Air 2',
    price: 799,
    imageUrl: 'data:image/jpeg;base64,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',
  },
  {
    name: 'Parrot Anafi',
    model: 'Anafi',
    price: 699,
    imageUrl: 'https://static.wixstatic.com/media/d47f30_451527a450c242d1806497cb93048c25~mv2.jpg/v1/fill/w_480,h_484,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d47f30_451527a450c242d1806497cb93048c25~mv2.jpg',
  },
  {
    name: 'Autel Robotics EVO II',
    model: 'EVO II',
    price: 1495,
    imageUrl: 'https://oechsle.vteximg.com.br/arquivos/ids/16386718/image-0.jpg?v=638316516398800000',
  },
  {
    name: 'Skydio 2',
    model: 'Skydio 2',
    price: 999,
    imageUrl: 'https://cdn.sanity.io/images/mgxz50fq/production-v2/fe2471c594d6333e77433bc6c5dc6fc28aab4172-1920x1095.jpg?w=1920&h=1095&auto=format',
  },
  {
    name: 'Yuneec Typhoon H3',
    model: 'Typhoon H3',
    price: 2499,
    imageUrl: 'https://www.ubuy.pe/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDFMUkpjczRLRkwuX1NTNDAwXy5qcGc.jpg',
  },
  {
    name: 'Holy Stone HS720E',
    model: 'HS720E',
    price: 339,
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_915738-MLA52849786058_122022-O.webp',
  },
];

function App() {
  return (
    <div className="App">
      <h1>Catálogo de Drones</h1>
      <div>
        {listaDrones.map((drone) => (
          <Drone
            name={drone.name}
            model={drone.model}
            price={drone.price}
            imageUrl={drone.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
