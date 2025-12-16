import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext} from '../context/AuthContext'
import { useCartContext } from '../context/CartContext';


function Nav() {
  const { usuario, isAuthenticated, cerrarSesion } = useAuthContext();
  const { carrito } = useCartContext();
  const {vaciarCarrito} = useCartContext();
  const navigate= useNavigate();

  const manejarCerrarSesion = () => {
    navigate("/");

    // Tiempo 1'' para asegurar la navegación
    setTimeout(() => {
      vaciarCarrito();
      cerrarSesion();
    }, 100);
  };
  // const {carrito} = useCartContext();
  

    return(
        
        <nav style = {{
            backgroundColor: "#333", 
            color: "white",
            padding: "10px"
        }}>
            <ul style = {{
                listStyle: "none",
                display: "flex",
                justifyContent: "space-around",
                margin: 0
            }}>
                <li><Link to="/" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>INICIO</Link>
                </li>
                <li><Link to="/novelas" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>NOVELAS</Link>
                </li>
                <li><Link to="/no-ficcion" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>NO FICCION</Link>
                </li>
                <li><Link to="/educativos" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>EDUCATIVOS</Link>
                </li>
                <li><Link to="/infantil" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>INFANTIL</Link>
                </li>
                <li><Link to="/ciencia-ficcion" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>CIENCIA FICCIÓN</Link>
                </li>
                
            {/* ENLACE PARA ADMIN - Solo visible para admin */}
            {usuario?.nombre === "admin" && (
              <li>
                <Link to="/agregar-producto">Agregar Producto</Link>
              </li>
            )}
            
            <li>
          {isAuthenticated ? (
            <div>
              <span>Hola, {usuario.nombre}</span>
              
              {/* ENLACE DASHBOARD solo para admin */}
              {usuario.nombre === "admin" && (
                <Link to="/dashboard" style={{margin: '0 10px'}}>
                  Dashboard
                </Link>
              )}

              {/* CARRITO */}
              <Link to="/pagar" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
                Carrito ({carrito.length})
              </Link>
              <button onClick={manejarCerrarSesion}>
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <Link to="/iniciar-sesion">Iniciar Sesión</Link>
          )}
        </li>
        </ul>
    </nav>
  )
} export default Nav