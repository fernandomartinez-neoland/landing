import { useState } from "react";
import { Nombre } from "./Nombre.component.tsx";

export function Container() {
  const [title, setTitle] = useState("");
  const [tituloPadre, setTituloPadre] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target.nombre.value);
    setTitle(event.target.nombre.value);
  };

  const handleTitle = (titulo: string) => {
    setTituloPadre(titulo);
  };

  return (
    <>
    componente padre
    <h1>{tituloPadre}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="introduzca el nombre" />
        <button>Enviar</button>
      </form>

      <Nombre value={{ title }}  funcion={{handleTitle}}/>
    </>
  );
}
