interface Prop {
  value: {
    title: string;
  },
  funcion:any;
}

export function Nombre({ value, funcion }: Prop) {
  return (
    <>
    componente hijo
      <h1>{value.title}</h1>
      <button onClick={()=>funcion.handleTitle("Fernando")}>Titulo padre es Fernando</button>
     </>
  );
}
