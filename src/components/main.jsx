import React from 'react';
import Gallery, {Categorias} from './gallery.jsx'
import Productos from './shop.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTruck, FaCreditCard, FaStar, FaShoppingCart } from "react-icons/fa";


function Main () {
  return (
    <main style={{ padding: "20px" }}>
      <section
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px"
        }}
      >
        <img
          src="https://picsum.photos/180?text=imagen+1"
          alt="Imagen 1"
          style={{ width: "500px", height: "500px", borderRadius: "8px" }}
        />
      </section>
      <Gallery />
      <Banner />
      <Categorias />
      <Banner />
      <Beneficios />
      <Newsletter />
      <Productos/>
    </main>
    );
} export default Main;






function Banner() {
  return (
    <section
      style={{
        backgroundColor: "#555", // gris oscuro del fondo
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        margin: "20px 0",
        gap: "40px",
      }}
    >
      <div style={{ flex: "0 0 auto" }}>
        <img
          src="https://i.imgur.com/5R1PLeH.png" 
          alt="Vista de producto en el hogar"
          style={{
            width: "220px",
            height: "auto",
            borderRadius: "8px",
            objectFit: "contain",
          }}
        />
      </div>

      <div style={{ maxWidth: "500px" }}>
        <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>
          Descuentos imperdibles!
        </h2>
        <p style={{ fontSize: "16px", color: "#ddd" }}>
          Débito o transferencia - 30% OFF en efectivo
        </p>
      </div>
    </section>
  );
}

export {Banner};










function Beneficios() {
  const items = [
    {
      icono: <FaTruck size={40} color="#b89a7e" />,
      titulo: "Envíos a todo el país",
      descripcion: "Entrega segura y rápida con nuestra flota logística.",
    },
    {
      icono: <FaCreditCard size={40} color="#b89a7e" />,
      titulo: "Todos los medios de pago",
      descripcion: "Tarjetas, transferencia, efectivo y cuotas sin interés.",
    },
    {
      icono: <FaStar size={40} color="#b89a7e" />,
      titulo: "Calidad garantizada",
      descripcion: "Productos premium seleccionados y con garantía.",
    },
    {
      icono: <FaShoppingCart size={40} color="#b89a7e" />,
      titulo: "Compras online seguras",
      descripcion: "Realizá tus pedidos fácilmente desde cualquier dispositivo.",
    },
  ];

  return (
    <section className="beneficios">
      {items.map((item, index) => (
        <div key={index} className="beneficio">
          <div className="icono">{item.icono}</div>
          <h4>{item.titulo}</h4>
          <p>{item.descripcion}</p>
          {index < items.length - 1 && <div className="divider"></div>}
        </div>
      ))}
    </section>
  );
}

export {Beneficios};






function Newsletter() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#fff",
        padding: "20px",
        borderTop: "1px solid #ddd",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          textAlign: "right",
          width: "200px",
        }}
      >
        Enterate de nuestras<br />promociones
      </h3>

      <input
        type="email"
        placeholder="Tu correo electrónico"
        style={{
          padding: "8px",
          border: "1px solid #000",
          width: "200px",
        }}
      />

      <button
        type="submit"
        style={{
          backgroundColor: "orangered",
          color: "#fff",
          border: "none",
          padding: "8px 14px",
          borderRadius: "12px",
          fontWeight: "bold",
          fontSize: "0.8rem",
          cursor: "pointer",
        }}
      >
        SUBMIT
      </button>
    </section>
  );
}

export {Newsletter};