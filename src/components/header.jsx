import React from 'react';
import { useState } from 'react';


function Header () {
    return (
        <>
        <header style = {{
            backgroundColor: "#F4F4F4", 
            padding: "10px",
            textAlign: "center",
            color: "#555555"
        }}>
                <h1>Muebles KM12</h1>
                <div>
                    <Buscador />
                    <a href="">🛒</a>
                    <a href="">🧑‍🦲</a>
                </div>
        </header>
        </>
    );
} export default Header;


function Buscador() {
  const [busqueda, setBusqueda] = useState('');
  const elementos = [];

  const filtrados = elementos.filter((item) =>
    item.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>🔎</h2>

      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          padding: '10px',
          width: '200px',
          marginBottom: '20px',
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
      />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filtrados.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export {Buscador};