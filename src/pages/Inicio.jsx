import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTruck, FaCreditCard, FaStar, FaShoppingCart } from "react-icons/fa";

function Main () {
  return (
    <main style={{ padding: "20px" }}>

      {/* H1 SEO PRINCIPAL */}
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        Librería Online – Libros Clásicos, Modernos y Educativos
      </h1>

      <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 30px" }}>
        Descubrí nuestra tienda online especializada en <strong>libros de literatura, historia,
        ficción y educación</strong>. Comprá libros online con envíos a todo el país.
      </p>

      {/* Imagen destacada */}
      <section
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px"
        }}
      >
        <img
          src="https://picsum.photos/180?text=libros"
          alt="Catálogo de libros destacados"
          style={{ width: "500px", height: "500px", borderRadius: "8px" }}
        />
      </section>

      <Gallery />
      <Banner />
      <Categorias />
      <Banner />
      <Beneficios />
      <Newsletter />
    </main>
  );
}

export default Main;






function Banner() {
  return (
    <section
      style={{
        backgroundColor: "#555",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        margin: "20px 0",
        gap: "40px",
      }}
    >
      <img
        src="https://i.imgur.com/5R1PLeH.png"
        alt="Promociones en libros"
        style={{ width: "220px", borderRadius: "8px" }}
      />

      <div style={{ maxWidth: "500px" }}>
        <h2>Promociones especiales en libros</h2>
        <p>
          Aprovechá <strong>descuentos exclusivos</strong> en novelas, libros educativos
          y literatura clásica.
        </p>
      </div>
    </section>
  );
}

export { Banner };











function Beneficios() {
  const items = [
    {
      icono: <FaTruck size={40} color="#b89a7e" />,
      titulo: "Envíos de libros a todo el país",
      descripcion: "Recibí tus libros de forma rápida y segura.",
    },
    {
      icono: <FaCreditCard size={40} color="#b89a7e" />,
      titulo: "Pagos simples y seguros",
      descripcion: "Aceptamos todos los medios de pago.",
    },
    {
      icono: <FaStar size={40} color="#b89a7e" />,
      titulo: "Libros de calidad garantizada",
      descripcion: "Ediciones seleccionadas y autores reconocidos.",
    },
    {
      icono: <FaShoppingCart size={40} color="#b89a7e" />,
      titulo: "Compra online fácil",
      descripcion: "Elegí tus libros desde cualquier dispositivo.",
    },
  ];

  return (
    <section className="beneficios">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        ¿Por qué elegir nuestra librería?
      </h2>

      {items.map((item, index) => (
        <div key={index} className="beneficio">
          <div className="icono">{item.icono}</div>
          <h3>{item.titulo}</h3>
          <p>{item.descripcion}</p>
        </div>
      ))}
    </section>
  );
}

export { Beneficios };







function Newsletter() {
  return (
    <section
      aria-labelledby="newsletter-title"
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
      {/* H3 SEO (no rompe estilos) */}
      <h3
        id="newsletter-title"
        style={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          textAlign: "right",
          width: "200px",
        }}
      >
        Novedades y ofertas en libros
      </h3>

      <input
        type="email"
        placeholder="Tu correo electrónico"
        aria-label="Correo electrónico para recibir novedades literarias"
        style={{
          padding: "8px",
          border: "1px solid #000",
          width: "200px",
        }}
      />

      <button
        type="submit"
        aria-label="Suscribirse al newsletter de libros"
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









function Gallery() {
  const images = [
    "https://picsum.photos/seed/1/400/300?text=Producto+1",
    "https://picsum.photos/seed/2/400/300?text=Producto+2",
    "https://picsum.photos/seed/3/400/300?text=Producto+3",
    "https://picsum.photos/seed/4/400/300?text=Producto+4",
    "https://picsum.photos/seed/5/400/300?text=Producto+5",
    "https://picsum.photos/seed/6/400/300?text=Producto+6"
  ];

  const visible = 4;
  const cardWidth = 250; 
  const gap = 16; 
  const step = cardWidth + gap;

  // crear clones: lastVisible + images + firstVisible
  const prefix = images.slice(-visible);
  const suffix = images.slice(0, visible);
  const ext = [...prefix, ...images, ...suffix];

  // index en ext. start en "visible" (primer elemento real)
  const [idx, setIdx] = useState(visible);
  const [isAnimating, setIsAnimating] = useState(true);
  const trackRef = useRef(null);

  // Next / Prev
  const next = () => {
    if (isAnimating) {
      setIdx((i) => i + 1);
      setIsAnimating(true);
    }
  };

  const prev = () => {
    if (isAnimating) {
      setIdx((i) => i - 1);
      setIsAnimating(true);
    }
  };

  // al terminar la transición: si estamos en clones, hacemos reset sin animación
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleTransitionEnd = () => {
      // si idx llegó al final de los elementos reales + visible (estamos en el suffix clone)
      if (idx >= images.length + visible) {
        // reset al primer real (visible)
        setIsAnimating(false);
        setIdx(visible);
      }
      // si idx llegó al prefix clone (antes del primer real)
      if (idx < visible) {
        setIsAnimating(false);
        setIdx(images.length + (visible - 1));
        // nota: images.length + (visible - 1) posiciona en el último item real
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [idx, images.length, visible]);

  // cuando desactivamos la animación para hacer el reset instantáneo, reactivarla inmediatamente después
  useEffect(() => {
    if (!isAnimating) {
      // force reflow y volver a activar animación
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    }
  }, [isAnimating]);

  // transform X calculado
  const translateX = -idx * step;

  return (
    <>
    <div className="d-flex align-items-center justify-content-center">
      <button className="btn btn-light me-2 arrow-btn" onClick={prev} aria-label="Anterior">
        ❮
      </button>

      <div className="carousel-window">
        <div
          className="carousel-track"
          ref={trackRef}
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isAnimating ? "transform 400ms ease" : "none"
          }}
        >
          {ext.map((src, i) => (
            <div className="product-card" key={i}>
              <div className="card h-100">
                <img src={src} className="card-img-top" alt={`Producto ${i + 1}`} />
                <div className="card-body">
                  <h6 className="card-title">Producto {((i - visible + images.length) % images.length) + 1}</h6>
                  <p className="card-text">$ { ( ( (i - visible) % images.length + images.length ) % images.length + 1) * 1000 }</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="btn btn-light ms-2 arrow-btn" onClick={next} aria-label="Siguiente">
        ❯
      </button>
    </div>
  
    </>
  );
  
}

export {Gallery};

function Categorias() {
  const categorias = [
    { nombre: "Novelas", imagen: "https://picsum.photos/id/1018/600/800" },
    { nombre: "No Ficción", imagen: "https://picsum.photos/id/1025/600/400" },
    { nombre: "Educativos", imagen: "https://picsum.photos/id/1016/600/500" },
    { nombre: "Infantiles", imagen: "https://picsum.photos/id/1043/600/900" },
    { nombre: "Ciencia Ficción", imagen: "https://picsum.photos/id/1035/600/700" },
  ];

  return (
    <section className="categorias-masonry">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Categorías de libros
      </h2>

      {categorias.map((cat, i) => (
        <article key={i} className={`categoria-item item${i + 1}`}>
          <img src={cat.imagen} alt={`Libros de ${cat.nombre}`} />
          <div className="overlay">
            <h3>{cat.nombre}</h3>
            <p>Explorá nuestra colección de libros de {cat.nombre}.</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export { Categorias };



function GaleriaIntereses({ intereses }) {
  function capturarClic(e) {
    e.target.style.backgroundColor = '#28a745';
    e.target.style.color = 'white';
  }

  return (
    <div className="galeria-intereses">
      {intereses.map((interes) => (
        <button
          key={interes} 
          className="interes-boton"
          onClick={capturarClic}
        >
          {interes}
        </button>
      ))}
    </div>
  );
} export {GaleriaIntereses};

