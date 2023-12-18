import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./img1.avif" style={{borderRadius:80, height:300}} alt="logo" />
        <p>
          Bienvenido a nuestra página web sobre los vehículos más conocidos en  Perú.
        <br></br>
        Aquí encontrará los 6 modelos de vehículos más queridos como odiados por el peruano de a pie.
        </p>
        <a
          className="App-link"
          href="https://gestion.pe/economia/vuelven-plantas-ensamblaje-vehiculos-peru-produce-prepublicara-reglamento-86870-noticia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aquí podrás ver más noticias relacionadas
        </a>
      </header>
    </div>
  );
}

export default App;
