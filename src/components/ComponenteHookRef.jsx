import { useRef } from "react";

export default function ComponenteHookRef() {
  const subtitle = useRef();
  console.log(subtitle);
  console.log(subtitle.current.innerText);

  const cambiarH1ARojo = () => {
    subtitle.current.style.color = "red";
  };
  const cambiarH1AAzul = () => {
    subtitle.current.style.color = "blue";
  };
  const cambiarH1AVerde = () => {
    subtitle.current.style.color = "green";
  };
  const cambiarTexto = () => {
    subtitle.current.innerText = "Diego sos un crack";
  };

  return (
    <div>
      <h1 ref={subtitle}>Soy el Componente</h1>
      <button onClick={cambiarH1ARojo}>Cambiar el H1 a Rojo</button>
      <button onClick={cambiarH1AAzul}>Cambiar el H1 a Azul</button>
      <button onClick={cambiarH1AVerde}>Cambiar el H1 a Verde</button>
      <button onClick={cambiarTexto}>Cambiar Texto</button>
    </div>
  );
}
