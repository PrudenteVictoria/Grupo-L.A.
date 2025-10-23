import {useState, useEffect} from "react";
import React from "react";

export default function Productos() {

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://68f99215ef8b2e621e7ca343.mockapi.io/api/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!", error)}
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20',
      padding: '0',
      listStyle: 'none',
    }}>
      {productos.map((producto) => (
        <li key={producto.id}>
          Nombre: {producto.nombre}
          <br />
          Descripción: {producto.descripcion}
          <br />
          Precio: ${producto.precio}
          <br/>
          <img src={producto.avatar}
          style={{
            width: '100%',
            height:'200px',
            objectFit: 'cover'
          }}></img>
        </li>
      ))}
    </ul>
  );
}