import React from 'react';
import { Link } from "react-router-dom";
import { useAuthContext} from '../context/AuthContext'
import { useCartContext } from '../context/CartContext';


function Nav() {
  const { usuario, isAuthenticated, cerrarSesion } = useAuthContext();
  const { carrito } = useCartContext();

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
                <li><Link to="/hogar" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>HOGAR</Link>
                </li>
                <li><Link to="/living" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>LIVING</Link>
                </li>
                <li><Link to="/cocina" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>COCINA</Link>
                </li>
                <li><Link to="/comedor" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>COMEDOR</Link>
                </li>
                <li><Link to="/dormitorio" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>DORMITORIO</Link>
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
              <button onClick={cerrarSesion}>
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