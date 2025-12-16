import { useState} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CarritoCompras from "./Carrito";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { useProducts } from "../context/ProductsContext";


function Novelas() {
  const { productos, cargando, error } = useProducts();
  const { agregarAlCarrito } = useCartContext();
  const { usuario } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();


  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);



  const productosPorPagina = 6;


const manejarEliminar = (producto) => {
  navigate('/eliminar-productos', { state: { producto } });
};

const manejarEditar = (producto) => {
  navigate('/editar-productos', { state: { producto } });
};


const novelas = productos.filter(
  (producto) => producto.categoria?.toLowerCase() === "novela"
);


const productosFiltrados = novelas.filter(
  (producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.categoria.toLowerCase().includes(busqueda.toLowerCase())
);


  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = productosFiltrados.slice(indicePrimerProducto, indiceUltimoProducto);
 
  // Cambiar de página
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);


  // Resetear a página 1 con búsquedas
  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
    setPaginaActual(1);
  };



  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="container mt-4">
        {/* Barra de búsqueda */}
        <div className="row mb-4">
          <div className="col-12 col-md-6">
            <label className="form-label fw-bold">Buscar productos</label>
            <input
              type="text"
              placeholder="Buscar por nombre o categoría..."
              className="form-control"
              value={busqueda}
              onChange={manejarBusqueda}
            />
            {busqueda && (
              <small className="text-muted">
                Mostrando {productosFiltrados.length} de {productos.length} productos
              </small>
            )}
          </div>
        </div>


        {/* Grid de productos */}
        <div className="row">
          {productosActuales.map((producto) => (
            <div key={producto.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <img
                  src={producto.avatar}
                  alt={producto.nombre}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
               
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text flex-grow-1">
                    {producto.descripcion}
                  </p>
                  <p className="card-text fw-bold text-primary">
                    ${producto.precio}
                  </p>
                 
                  <div className="mt-auto">
                    <div className="d-grid gap-2">
                  <Link
                    to={`/productos/${producto.id}`}
                    state={{
                      producto,
                      from: location.pathname
                    }}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Ver detalles
                  </Link>


                      <button
                        onClick={() => agregarAlCarrito(producto)}
                        className="btn btn-sm"
                        style={{ backgroundColor: '#556B2F', color: 'white' }}
                      >
                        Agregar al carrito
                      </button>
                    </div>


                    {/* Botones de admin */}
                      {usuario && usuario.rol === "admin" && (
                      <div className="mt-3 pt-3 border-top">
                        <div className="d-flex gap-2">
                          <button
                            onClick={() => manejarEditar(producto)}
                            className="btn btn-warning btn-sm flex-fill"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => manejarEliminar(producto)}
                            className="btn btn-danger btn-sm flex-fill"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Paginador - Estilo simplificado */}
        {productosFiltrados.length > productosPorPagina && (
          <div className="d-flex justify-content-center my-4">
            {Array.from({ length: totalPaginas }, (_, index) => (
              <button
                key={index + 1}
                className={`btn mx-1 ${paginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => cambiarPagina(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}


        {/* Información de la página actual */}
        {productosFiltrados.length > 0 && (
          <div className="text-center text-muted mt-2">
            <small>
              Mostrando {productosActuales.length} productos
              (página {paginaActual} de {totalPaginas})
            </small>
          </div>
        )}
      </div>
    </>
  );
} export default Novelas;