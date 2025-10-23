import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
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
                <li><Link to="/shop/hogar" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>HOGAR</Link>
                </li>
                <li><Link to="/shop/living" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>LIVING</Link>
                </li>
                <li><Link to="/shop/cocina" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>COCINA</Link>
                </li>
                <li><Link to="/shop/comedor" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>COMEDOR</Link>
                </li>
                <li><Link to="/shop/dormitorio" 
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}>DORMITORIO</Link>
                </li>
            </ul>
        </nav>
        </>
    );
} export default Nav