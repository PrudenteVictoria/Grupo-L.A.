import './App.css'
import { Routes, Route } from "react-router-dom";

import Main from './pages/Inicio.jsx'
import Hogar from './pages/hogar.jsx'
import ProductoDetalle from './pages/detalle_producto.jsx';
import Pagar from './pages/pagar.jsx'
import RutaProtegida from './pages/RutaProtegida.jsx'
import IniciarSesion from './pages/IniciarSesion.jsx'
import {CartProvider} from './context/CartContext.jsx'
import {AuthProvider} from './context/AuthContext.jsx'
import { ProductsProvider } from "./context/ProductsContext";
import Dashboard from "./pages/Dashboard";
import FormularioProducto from "./components/AgregarProducto.jsx"
import EditarProductos from "./components/EditarProductos.jsx"
import EliminarProducto from './components/EliminarProducto.jsx';
import Layout from './components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


function App() {
  return (
    <div>
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <Layout>


              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/hogar' element={<Hogar />} />
                <Route path="/productos/:id" element={<ProductoDetalle />} />
                <Route path='/iniciar-sesion' element={<IniciarSesion/>}/>

                <Route
                  path="/pagar"
                  element={
                    <RutaProtegida>
                      <Pagar />
                    </RutaProtegida>
                  }
                />

                <Route
                  path="/dashboard"
                  element={
                    <RutaProtegida soloAdmin={true}>
                      <Dashboard />
                    </RutaProtegida>
                  }
                />

                <Route
                  path="/agregar-producto"
                  element={
                    <RutaProtegida soloAdmin={true}>
                      <FormularioProducto />
                    </RutaProtegida>
                  }
                />

                <Route
                  path='/editar-productos'
                  element={
                    <RutaProtegida soloAdmin={true}>
                      <EditarProductos />
                    </RutaProtegida>
                  }
                />

                <Route
                  path='/eliminar-productos'
                  element={
                    <RutaProtegida soloAdmin={true}>
                      <EliminarProducto />
                    </RutaProtegida>
                  }
                />
              </Routes>

              <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                draggable
                pauseOnHover
              />


            </Layout>
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </div>
  );
} export default App;




























//   return (
//     <>
//       <Header />
//       <main>
//         <h1>Bienvenido a mi tienda</h1>
//         <ProductCard name="Zapatillas Nike" price={120} />
//         <ProductCard name="Remera Adidas" price={45} />
        
//         <Boton texto="Aceptar" color="green" />
//         <Boton texto="Cancelar" color="red" />

//         <Tarjeta 
//           titulo = "Oferta Especial"
//           descripcion = "20% de descuento en todos los productos"
//           botonTexto = "Ver más"
//         />
//       </main>
//       <Footer />
//     </>
//   )
// } export default App
  




// // components/index.js
// function Header() {
//   return <header><h2>Tienda Online</h2></header>
// }

// function Footer() {
//   return <footer><p>© 2025 Mi E-Commerce</p></footer>
// }

// function ProductCard({ name, price }) {
//   return (
//     <div className="card">
//       <h3>{name}</h3>
//       <p>Precio: ${price}</p>
//     </div>
//   )
// }

// export { Header, Footer, ProductCard }


// function Subtitulo() {
//   return (
//     <h2>Talento tech</h2>
//   )
// } export {Subtitulo}



// function ListaUsuarios() {
//   const usuarios = ['Ana', 'Luis', 'Pedro', 'María'];
//   return (
//     <ul>
//       {usuarios.map(usuario => (
//         <li key={usuario}>{usuario}</li>
//       ))}
//     </ul>
//   );
// } export {ListaUsuarios}

// function Boton({ texto, color }) {
//   const estilo = { backgroundColor: color, color: 'white', padding:
//   '10px', border: 'none' };
//   return <button style={estilo}>{texto}</button>;
// }

// function ListaFrutas () {
//   const productos = ['Manzanas', 'Peras', 'Naranjas'];
//   return (
//   <ul>
//       {productos.map(productos => (
//         <li key={productos}>{productos}</li>
//       ))}
//     </ul>
//   );
// } export {ListaFrutas}


// function Tarjeta({titulo, descripcion, botonTexto}) {
//   const estilo = { backgroundColor: 'yellow', padding:'10px', border: 'none' };
//   const estiloTarjeta = { backgroundColor: 'green', padding:'10px'};
//   return(  
//     <div className = 'tarjeta' style ={estiloTarjeta}>
//       <h3>{titulo}</h3>
//       <p>{descripcion}</p>
//       <button style={estilo} onClick={()=> alert("Hola")}>{botonTexto}</button>
//     </div>
//   );
// }


// function Formulario() {
//   const [nombre, setNombre] = useState(''); //variables de estado

//   const manejarCambio = (e) => {  // funcion que se ejecuta al enviar el form
//     setNombre(e.target.value)
//     };

//   return(
//     <div>
//       <input 
//         type="text"
//         value={nombre}
//         onChange={manejarCambio}
//         placeholder="Escribe tu nombre"/>
//       <p>hola {nombre || 'anónimo'}!</p>
//     </div>
//   );
// } export {Formulario}


// function FormularioEnvio() {
//   const [nombre, setNombre] = useState('');
//   function manejarEnvio(evento) {
//     evento.preventDefault();
//     alert(`Formulario enviado por: ${nombre}`);
//     }
//   return (
//     <form onSubmit={manejarEnvio}>
//       <input
//       type="text"
//       value={nombre}
//       onChange={(e) => setNombre(e.target.value)}
//       placeholder="Ingresa tu nombre"
//       />
//       <button type="submit">Enviar</button>
//     </form>
//   );
//   } export {FormularioEnvio}

//   function FormularioCompleto() {
//   const [nombre, setNombre] = useState(''); //variables de estado
//   const [correo, setCorreo] = useState('');

//   const manejarEnvio = (e) => {  // funcion que se ejecuta al enviar el form
//     e.preventDefault(); //evita que la pagina se recargue
//     console.log('Datos enviados:', {nombre,correo});

//     //limpiar campos
//     setNombre('');
//     setCorreo('');
//   };

//   return(
//     <div>
//       <h2>Formulario de envío</h2>
//       <form onSubmit={(manejarEnvio)}>
//         <div>
//           <label>Nombre:</label>
//             <input 
//               type="text"
//               value={nombre}
//               onChange={(e) => setNombre(e.target.value)}
//               placeholder="Escribe tu nombre"/>
//         </div>
//         <div>
//           <label>Correo:</label>
//           <input
//             type="email"
//             value={correo}
//             onChange={(e) => setCorreo(e.target.value)}
//             placeholder="Escribe tu nombre"
//           />
//         </div>
//         <hr />
//         <button type="submit">Enviar</button>
//       </form>
            
//       <div>
//         <p>Nombre: {nombre || 'Anónimo'}</p>
//         <p>Correo: {correo || 'No proporcionado'}</p>
//       </div>
      

//     </div>
//   );
// } export {FormularioCompleto}



// function FormObjetos(){
//   const [formulario, setFormulario] = useState({ //variable de estado Formulario es un obj
//     nombre: '',
//     correo: ''
//   });

//   const manejarCambio = (e) => {
//     setFormulario({
//       ...formulario, // operador de propagación o spread operator. Mantiene los valores existentas
//       [e.target.name]: e.target.value //actualizamos solo el campo que cambió
//     });
//   };

//   //ejecución al enviar el formulario
//   const manejarEnvio = (e) => {
//     e.preventDefault();
//     console.log ('datos enviados:', formulario);

//     //limpia
//     setFormulario({
//       nombre: '',
//       correo: ''
//     });
//   };

//   return (
//     <div>
//       <h2>Forumulario de Evento</h2>
//       <form onSubmit={manejarEnvio}>
//         <div>
//           <label>Nombre:</label>
//             <input 
//               type="text"
//               name="nombre"
//               value={formulario.nombre}
//               onChange={manejarCambio}
//               placeholder="Escribe tu nombre"/>
//         </div>
//         <div>
//           <label>Correo:</label>
//           <input
//             type="email"
//             name="correo"
//             value={formulario.correo}
//             onChange={manejarCambio}
//             placeholder="Escribe tu nombre"
//           />
//         </div>
//         <hr />
//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   )
// } export {FormObjetos};

// const Componente = () => {
//   const manejarMouseOver = () => {
//     console.log('El mouse está sobre el elemento');
//   };

//   return (
//     <div onMouseOver = {manejarMouseOver}>
//       Pasa el mouse por aquí
//     </div>
//   );
// }; export {Componente}


// function Hover() {
//   const [estilo, setEstilo] = useState({ backgroundColor: 'white'});
//   const manejarMouseOver = () => {
//     setEstilo({ backgroundColor: 'green', color: 'white'});
//   };
//   const manejarMouseOut = () => {
//     setEstilo({ backgroundColor: 'white'});
//   };

//   return (
//     <button
//     onMouseOver ={manejarMouseOver}
//     onMouseOut = {manejarMouseOut}
//     style={estilo}>
//       Botón con Hover
//     </button>
//   );
// } export {Hover}

























// //carritoooo


// function Layout({ children }) {
//   return (
//     <div id="tarjeta">
//       <header>
//         <h1>Tienda Online</h1>
//       </header>
//       <main>{children}</main>
//       <footer id="footer"> 
//         © 2025 Tienda Online - Todos los derechos reservados
//       </footer>
//     </div>
//   );
// }


// function ProductoList({ agregarAlCarrito }) {
//   const productos = [
//     { id: 1, nombre: 'Camiseta', precio: 15.000 },
//     { id: 2, nombre: 'Pantalón', precio: 30.000 },
//     { id: 3, nombre: 'Zapatos', precio: 50.000 },
//   ];

//   return (
//     <div>
//       <h2>Productos Disponibles</h2>
//       {productos.map((producto) => (
//         <div key={producto.id}>
//           <span>{producto.nombre} - ${producto.precio.toFixed(3)}</span>
//           <button
//             onClick={() => agregarAlCarrito(producto)}
//           >
//             Agregar
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Carrito({ carrito, vaciarCarrito }) {
//   // Calcular el total de la compra
//   const total = carrito.reduce((sum, item) => sum + item.precio, 0);

//   return (
//     <div>
//         <hr />
//       <h2>Carrito de Compras</h2>
//       {carrito.length === 0 ? (
//         <p>El carrito está vacío</p>
//       ) : (
//         <>
//           {carrito.map((item) => (
//             <div >
//               {item.nombre} - ${item.precio.toFixed(3)}
//             </div>
//           ))}
         
//            {/* Muestra el total de la compra  */}
//           <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>
//             Total: ${total.toFixed(3)}
//           </div>
         
//           <button
//             onClick={vaciarCarrito}
//             style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer', backgroundColor: '#ff4444', color: 'white' }}
//           >
//             Vaciar Carrito
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// function EcommerceTotal() {
//   const [carrito, setCarrito] = useState([]);

//   const agregarAlCarrito = (producto) => {
//     setCarrito([...carrito, producto]);
//   };

//   const vaciarCarrito = () => {
//     setCarrito([]);
//   };

//   return (
//     <Layout>
//         <ProductoList agregarAlCarrito={agregarAlCarrito} />
//         <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />
//     </Layout>
//   );
// } export {EcommerceTotal};





// // useffect

// const ContadorClic = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     const capturaClick = () => {
//       console.log('hizo clic');
//       setClicks(prev => prev + 1);
//     };

//     document.addEventListener('click', capturaClick);

//     return () => {
//       console.log("Limpieza realizada.");
//       document.removeEventListener('click', capturaClick);
//     };
//   }, [clicks]); 

//   return <h1>Total de clics: {clicks}</h1>;
// };



