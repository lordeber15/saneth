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
          className="relative group"
        >
          <div className="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[30px] h-[30px] transform transition-all bg-teal-500 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="transform transition-all duration-150 overflow-hidden -translate-y-5 group-focus:translate-y-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6h-6 w-6 animate-bounce text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="flex flex-col justify-between ml-2 mt-2 mb-0 w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
              <div className="bg-white mb-1.2 h-[2px] w-3 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>
              <div className="bg-white mb-1.2 h-[2px] w-3 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
              <div className="bg-white h-[2px] w-3 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
