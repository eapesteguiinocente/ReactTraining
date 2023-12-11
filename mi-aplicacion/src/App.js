import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./aggretsuko2.jpg" style={{borderRadius:80, height:300}} className="App-logo" alt="logo" />
        <p>
          Esta imagen es un reflejo de mi experiencia programando en TypeScript, Angular y React.
        <br></br>
        Todo en una MAC y en lo que dura un ciclo.
        </p>
        <a
          className="App-link"
          href="https://react.dev/learn/installation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aquí podrás ver cómo instalar REACT
        </a>
      </header>
    </div>
  );
}

export default App;
