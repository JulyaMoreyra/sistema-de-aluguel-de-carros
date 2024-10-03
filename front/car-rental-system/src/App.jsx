import "./App.css";

//structure reuse
import { Outlet } from "react-router-dom";

//page navegation
import Navbar from "./assets/components/Navbar";

function App() {
  return (
    <>
      <Navbar />
    
      <Outlet />
    </>
  );
}

export default App;
