import "./App.css";

//structure reuse
import { Outlet } from "react-router-dom";

//page navegation
import Navbar from "./assets/components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>React router</h1>
      <Outlet />
      <h1>Footer</h1>
    </>
  );
}

export default App;
