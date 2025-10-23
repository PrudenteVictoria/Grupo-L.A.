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
            <span style={{ color: "#000" }}>Muebles KM12</span>
            <span style={{ color: "limegreen" }}>*</span>
          </h2>
          <p style={{ lineHeight: "1.4" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        {/* columna 2 */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>ESPACIOS</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.6" }}>
            <li>Living</li>
            <li>Comedor</li>
            <li>Dormitorio Adultos</li>
            <li>Dormitorio Infantil/Juvenil</li>
            <li>Dormitorio Bebé</li>
            <li>Exterior</li>
          </ul>
        </div>

        {/* columna 3 */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>INSTITUCIONAL</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.6" }}>
            <li>CONTACTO</li>
            <li>SUCURSALES</li>
          </ul>
          <p style={{ marginTop: "10px" }}>
            <a href="mailto:chulawemuebles@gmail.com" style={{ color: "inherit" }}>
              chulawemuebles@gmail.com
            </a>
          </p>
          <p>
            Luis Piedrabuena 4445 (Munro)
            <br />
            Vicente Lopez
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
          <span>© Copyright 2023.</span>
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
              Garantía
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
