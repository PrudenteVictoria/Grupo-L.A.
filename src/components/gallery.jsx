import React from 'react';

function Gallery() {
    const images = [
        "https://picsum.photos/150?text=imagen+1",
        "https://picsum.photos/160?text=imagen+1",
        "https://picsum.photos/170?text=imagen+1",
        "https://picsum.photos/180?text=imagen+1",
        "https://picsum.photos/id/1/200/300?imagen+1",
    ];

    return (
        <section style = {{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginTop: "20px"
        }}>
            {images.map((src, index) =>(
                <img 
                key={index} 
                src={src} 
                alt={`Imagen ${index + 1}`} 
                style = {{width: "150px", height: "150px"}} />
            ))}
        </section>
    );
} export default Gallery;


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

