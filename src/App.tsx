import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/header.component.tsx";
import { Container } from "./components/container.component.tsx";
import { Footer } from "./components/footer.component.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header></Header>
      <Container></Container>
      <Footer/>
    </>
  );
}

export default App;
