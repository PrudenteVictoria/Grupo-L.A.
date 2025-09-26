import './App.css'
import Header from './components/header.jsx'
import Nav from './components/nav.jsx'
import Main from './components/main.jsx'
import Gallery, {GaleriaIntereses} from './components/gallery.jsx'
import Footer from './components/footer.jsx'

function App() {
  const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];
  return (
    <>    
    <Header />
    <Nav />
    <Main />
    <Gallery />
    <GaleriaIntereses intereses={intereses} />
    <Footer />
    </>
  );
} export default App




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