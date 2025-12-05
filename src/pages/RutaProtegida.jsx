import React from 'react';
import { useAppContext } from '../context/AppContext';

import { Navigate, useLocation } from 'react-router-dom';

function RutaProtegida({  children }) {
    const {isAuthenticated} = useAppContext();
const location = useLocation();

    if (!isAuthenticated) {
        return (
            <Navigate 
                to="/iniciar-sesion"  
                state={{ from: location }} 
                replace 
            />
        );
    }

    return children;
}

export default RutaProtegida;
