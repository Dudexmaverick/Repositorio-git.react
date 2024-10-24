import React from 'react';
import './App.css';

function App() {
  const handleRedirect = () => {
    window.location.href = 'https://github.com/Dudexmaverick/Repositorio-git.react/new/main'; 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao meu repositório Git!</h1>
        <button onClick={handleRedirect}>Ir para o Repositório</button>
      </header>
    </div>
  );
}

export default App;
