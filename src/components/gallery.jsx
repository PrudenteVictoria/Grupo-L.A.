import React, { useState, useRef, useEffect } from "react";

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

export default Gallery;

function Categorias() {
  const categorias = [
    { nombre: "Hogar", imagen: "https://picsum.photos/id/1018/600/800", link: "#" },
    { nombre: "Living", imagen: "https://picsum.photos/id/1025/600/400", link: "#" },
    { nombre: "Cocina", imagen: "https://picsum.photos/id/1016/600/500", link: "#" },
    { nombre: "Comedor", imagen: "https://picsum.photos/id/1043/600/900", link: "#" },
    { nombre: "Dormitorio", imagen: "https://picsum.photos/id/1035/600/700", link: "#" },
  ];

  return (
    <section className="categorias-masonry">
      {categorias.map((cat, i) => (
        <a href={cat.link} key={i} className={`categoria-item item${i + 1}`}>
          <img src={cat.imagen} alt={cat.nombre} />
          <div className="overlay">
            <h3>{cat.nombre}</h3>
            <button>VER ESPACIO</button>
          </div>
        </a>
      ))}
    </section>
  );
}

export  {Categorias};



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

