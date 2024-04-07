import logo from "../assets/svg/logodashboard.svg";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between h-20 items-center px-20 bg-teal-600 w-screen">
      <Link to="/dashboard" className="flex gap-3">
        <img src={logo} className=" h-14" />
        <div className="flex font-bold text-white text-2xl items-center">
          SANETH
        </div>
      </Link>
      <div className="flex flex-row gap-3">
        <div className="font-bold text-white text-2xl flex items-center">
          Bienvenido Administrador
        </div>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="flex justify-center items-center hover:bg-teal-500 hover:animate-squeeze px-1 py-1 rounded-lg"
        >
          <svg
            className="h-8 w-8 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M20 12h-13l3 -3m0 6l-3 -3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
