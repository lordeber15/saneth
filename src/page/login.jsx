import logo from "../assets/svg/logoSaneth.svg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import {
  getLogin,
} from "../request/login";

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  
  const handlerChangeUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const handlerChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const {
    isLoading,
    data: dataLogin,
    isError,
    error,
  } = useQuery({
    queryKey: ["login"],
    queryFn: getLogin,
  });

  const handleIngresar = () => {
    if (dataLogin) {
      const user = dataLogin.find(
        (user) => usuario === user.usuario && password === user.password
      );
      if (user) {
        localStorage.setItem("userData", JSON.stringify(user));
        navigate("/dashboard");
      } else {
        console.log("No puedes ingresar");
      }
    } else {
      console.log("Datos de usuario no disponibles aún");
    }
  };

  if (isLoading) {
    return (
      <div className={""}>
        Cargando...
      </div>
    );
  } else if (isError) {
    return <div className={""}>Error: {error.message}</div>;
  }

  
  
  return (
    <div className="flex flex-col items-center bg-gradient-to-bl from-teal-200 to-teal-900 h-screen justify-center">
      <div className="flex justify-center rounded-md flex-col w-72 gap-2">
        <img className=" w-30 p-8 animate-fade-in" src={logo} />
        <input
          className="p-2 rounded-md animate-slide-in-top  outline-blue-500/50 md:outline-blue-400 text-teal-800 font-bold"
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={handlerChangeUsuario}
        />
        <input
          className="p-2 rounded-md animate-slide-in-top  outline-blue-500/50 md:outline-blue-400 text-teal-800"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlerChangePassword}
        />
        <button
          className=" bg-teal-950 animate-slide-in-top  py-2 rounded-md font-bold text-teal-300"
          onClick={handleIngresar}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default Login;
