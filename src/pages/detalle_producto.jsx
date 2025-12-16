import { Link, useParams, useLocation, useNavigate } from "react-router-dom";

const ProductoDetalle = () => {

    const { id } = useParams();
    const location = useLocation();
    const producto = location.state?.producto;
    const from = location.state?.from || -1;    
    const navigate = useNavigate();
  

    const volver = () => {
    navigate(from);
    };

    if (!producto) {
      return (
        <div>
          <p>No se pudo cargar el producto</p>
          <button onClick={volver}>Volver a productos</button>
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
                <p><strong>Categoría: </strong> {producto.categoria}</p>
                <p><strong>Sub-género: </strong> {producto.subgenero}</p>
                <p><strong>Precio:</strong> ${producto.precio}</p>
                <p><strong>Stock:</strong> {producto.stock}</p>
                <img src={producto.avatar} alt={producto.nombre} width="30%" />
            </li>
            <hr />
        <button onClick={volver}>← Volver</button>
        </ul>
        </>
    );
}; export default ProductoDetalle;
