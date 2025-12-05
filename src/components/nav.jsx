import React from 'react';
import { Link } from "react-router-dom";
import { useAppContext} from '../context/AppContext'

function Nav() {
  const {isAuthenticated, usuario, carrito, cerrarSesion} = useAppContext();
    return(
        <>
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
                <li>
                  {isAuthenticated ? (
                    <div>
                      <span>Hola, {usuario.nombre}</span>
                      <span>Carrito: ({carrito.length})</span>
                      <button onClick={cerrarSesion}>Cerrar sesión</button>
                    </div>
                  ) : (
                    <Link to="/iniciar-sesion">Iniciar sesión</Link>
                  )}
                </li>
            </ul>
        </nav>
        </>
    );
} export default Nav