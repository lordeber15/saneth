import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./page/login";
import Dashboard from "./page/dashboard";
import Navbar from "./components/navbar";
import Historia from "./page/historias";
import { useLocation } from "react-router-dom";

function App() {
  const locationNow = useLocation();
  return (
    <div>
      {locationNow.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/historia/:id" element={<Historia />} />
      </Routes>
    </div>
  );
}

export default App;
