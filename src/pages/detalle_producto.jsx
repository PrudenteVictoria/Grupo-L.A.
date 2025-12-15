import { Link, useParams, useLocation } from "react-router-dom";

const ProductoDetalle = () => {

    const { id } = useParams();
    const location = useLocation();
    const producto = location.state?.producto;

    if (!producto) {
      return (
          <div>
              <p>No se pudo cargar el producto</p>
                <Link to="/hogar">
                  <button>Volver a productos</button>
                </Link>

        </div>
      );
    }

    return (
        <>
        <h2>Detalles del Producto {id}</h2>
        <ul>
            <li key={producto.id}>
                {producto.nombre}
                <br />
                <p><strong>Descripción: </strong> {producto.descripcion}</p>
                <p><strong>Precio:</strong> ${producto.precio}</p>
                <img src={producto.avatar} alt={producto.nombre} width="30%" />
            </li>
            <hr />
            <Link to={`/hogar`}><button>Volver</button></Link>
        </ul>
        </>
    );
}; export default ProductoDetalle;
