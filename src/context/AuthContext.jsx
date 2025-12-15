import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const emailGuardado = localStorage.getItem("authEmail");
    const rolGuardado = localStorage.getItem("authRol");

    if (token) {
      const username = token.replace("fake-token-", "");
      setUsuario({
        nombre: username,
        email: emailGuardado || "",
        rol: rolGuardado || "user",
      });
    }
    setCargando(false);
  }, []);

  const iniciarSesion = (username, emailIngresado) => {
    const token = `fake-token-${username}`;
    localStorage.setItem("authToken", token);
    localStorage.setItem("authEmail", emailIngresado);


    // Si el nombre es admin, asignamos rol admin
    const rol = username === "admin" ? "admin" : "user";
    localStorage.setItem("authRol", rol);

    setUsuario({
      nombre: username,
      email: emailIngresado || "",
      rol,
    });
  };

  const cerrarSesion = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authEmail");
    localStorage.removeItem("authRol");
    setUsuario(null);
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        iniciarSesion,
        cerrarSesion,
        isAuthenticated: !!usuario,
        cargando,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext debe usarse dentro de AuthProvider");
  }
  return context;
}
