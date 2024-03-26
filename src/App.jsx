import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./page/login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;