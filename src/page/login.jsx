import logo from "../assets/svg/logoSaneth.svg";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center bg-gradient-to-bl from-teal-200 to-teal-900 h-screen justify-center">
      <div className="flex justify-center rounded-md flex-col w-72 gap-2">
        <img className=" w-30 p-8" src={logo} />
        <input
          className="p-2 rounded-md outline-blue-500/50 md:outline-blue-400 text-teal-800 font-bold"
          type="text"
          placeholder="Usuario"
        />
        <input
          className="p-2 rounded-md outline-blue-500/50 md:outline-blue-400 text-teal-800"
          type="password"
          placeholder="Contraseña"
        />
        <button
          className=" bg-teal-950 py-2 rounded-md font-bold text-teal-300"
          onClick={() => navigate("/dashboard")}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default Login;
