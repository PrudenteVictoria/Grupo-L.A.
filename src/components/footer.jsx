import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#e6e6e6",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        fontSize: "0.9rem",
        color: "#000",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "15px",
        }}
      >
        {/* columna 1 */}
        <div style={{ maxWidth: "200px" }}>
          <h2 style={{ marginBottom: "10px" }}>
            <span style={{ color: "#000" }}>Librería Libertad</span>
            <span style={{ color: "limegreen" }}>*</span>
          </h2>
          <p style={{ lineHeight: "1.4" }}>
            Librería online especializada en libros clásicos, modernos y
            educativos. Descubrí historias para todas las edades.
          </p>
        </div>

        {/* columna 2 */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>GÉNEROS</h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: "1.6",
            }}
          >
            <li>Novela</li>
            <li>Ciencia Ficción</li>
            <li>Infantil y Juvenil</li>
            <li>No Ficción</li>
            <li>Educativos</li>
          </ul>
        </div>

        {/* columna 3 */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>INSTITUCIONAL</h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: "1.6",
            }}
          >
            <li>Contacto</li>
            <li>Comunidad</li>
          </ul>
          <p style={{ marginTop: "10px" }}>
            <a href="mailto:contacto@libroskm12.com" style={{ color: "inherit" }}>
              contacto@libroskm12.com
            </a>
          </p>
          <p>
            Av. de los Libros 1234
            <br />
            Buenos Aires
          </p>
        </div>
      </div>

      {/* linea */}
      <hr style={{ border: "1px solid #ccc", margin: "10px 0" }} />

      {/* sección inferior */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <span>© Copyright 2025.</span>
          <span style={{ marginLeft: "10px" }}>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Términos y Condiciones
            </a>{" "}
            |{" "}
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Políticas de Privacidad
            </a>{" "}
            |{" "}
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Envíos y Devoluciones
            </a>
          </span>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <a href="#" style={{ color: "gray", fontSize: "1.5rem" }}>
            <FaInstagram />
          </a>
          <a href="#" style={{ color: "gray", fontSize: "1.5rem" }}>
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
