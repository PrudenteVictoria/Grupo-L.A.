// Hogar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import datosProductos from "../assets/productos.json";
import CarritoCompras from "./Carrito"; 
import {useAppContext} from "../context/AppContext";

function Hogar() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const {agregarAlCarrito} = useAppContext();

  // useEffect(() => {
  //   try {
  //     setProductos(datosProductos.productos);
  //     setCargando(false);
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setError("Hubo un problema al cargar los productos.");
  //     setCargando(false);
  //   }
  // }, []);

  useEffect(() => {
    fetch("https://68f99215ef8b2e621e7ca343.mockapi.io/api/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error!", error);
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);


  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "0",
          listStyle: "none",
        }}
      >
        {productos.map((producto) => (
          <li
            key={producto.id}
            style={{
              width: "250px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <strong>{producto.nombre}</strong>
            <br />
            {producto.descripcion}
            <br />
            Precio: ${producto.precio}
            <br />
            <img
              src={producto.avatar}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <Link
              to={`/hogar/${producto.categoria || "sin-categoria"}/${producto.id}`}
              state={{ producto }}
            >
              <button style={{ marginTop: "10px" }}>Más detalle</button>
            </Link>

            <button
              style={{ marginLeft: "10px", marginTop: "10px" }}
              onClick={() => agregarAlCarrito(producto)}>
              Comprar
            </button>
          </li>
        ))}
      </ul>

      {/* Carrito nuevo */}
      <CarritoCompras />
    </>
  );
}

export default Hogar;
