import React from "react";
import "./App.scss";
import Banners from "./components/Banners";
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";




function App() {
  return (
  <div>
    <Header />  
    <ItemListContainer greeting={"¡Bienvenidos a Ferreteria Servifer!"} />
    <Banners /> 
    <Promocion />
    <Footer />
  </div>
  );
} 

export default App;