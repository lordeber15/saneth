import { useNavigate } from "react-router-dom";
function Historias() {
  const navigate = useNavigate();
  return (
    <div className="w-screen px-28 py-10 flex gap-3 flex-col">
      <div className="flex justify-between">
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded"
        >
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-3xl font-bold flex justify-center text-teal-900">
          Historias Clinicas
        </h1>
        <div></div>
      </div>

      <div className="flex gap-3 justify-end">
        <div>
          <label className=" font-bold text-sm px-1 text-teal-600">
            H.C N°
          </label>
          <input
            className="w-full text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            min={0}
            placeholder="H.C N°"
          />
        </div>
        <div>
          <label className=" font-bold text-sm px-1 text-teal-600">FECHA</label>
          <input
            className="w-full text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
          />
        </div>
      </div>
      <div className="flex justify-between ">
        <h2 className="text-2xl font-bold text-teal-900">
          Datos de Afiliacion
        </h2>
        <select className=" w-1/4 py-2 px-3 font-semibold text-teal-600 focus:outline-none border rounded focus:shadow-outline shadow appearance-none">
          <option>Adulto</option>
          <option>Niño</option>
          <option>Ortodoncia</option>
        </select>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col w-full">
          <label className=" font-bold text-sm px-1 text-teal-600">
            Nombre y Apellidos
          </label>
          <input
            className="text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Nombre y Apellido"
          />
        </div>
        <div className="flex flex-col w-[30%]">
          <label className=" font-bold text-sm px-1 text-teal-600">Edad</label>
          <input
            className=" text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Edad"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col w-[50%]">
          <label className=" font-bold text-sm px-1 text-teal-600">
            Dirección
          </label>
          <input
            className=" text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Direccion"
          />
        </div>
        <div className="flex flex-col w-[50%]">
          <label className=" font-bold text-sm px-1 text-teal-600">Ref</label>
          <input
            className=" text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Ref"
          />
        </div>
      </div>
      <div className="flex gap-3 flex-wrap">
        <div className="flex flex-col w-[24%]">
          <label className=" font-bold text-sm px-1 text-teal-600">
            Doc Ident
          </label>
          <input
            className=" text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            min={0}
            maxLength={8}
            placeholder="Doc Ident"
          />
        </div>
        <div className="flex flex-col w-[24.5%]">
          <label className=" font-bold text-sm px-1 text-teal-600">
            Est Civil
          </label>
          <select className="font-semibold text-teal-600 focus:outline-none border rounded focus:shadow-outline shadow appearance-none py-2 px-3">
          <option>Soltero(a)</option>
          <option>Casado(a)</option>
          <option>Otro</option>
        </select>
        </div>
        <div className="flex flex-col w-[24%]">
          <label className=" font-bold text-sm px-1 text-teal-600">
            Telf. Fijo
          </label>
          <input
            className="  text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            maxLength={9}
            min={0}
            placeholder="Telf. Fijo"
          />
        </div>
        <div className="flex flex-col w-[24%]">
          <label className=" font-bold text-sm px-1 text-teal-600">Cel</label>
          <input
            className="  text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            maxLength={9}
            placeholder="Cel"
            min={0}
          />
        </div>
      </div>
      <div className="flex gap-3 w-full">
        <div className="flex flex-col w-1/2">
          <label className=" font-bold text-sm px-1 text-teal-600">
            Operacion
          </label>
          <input
            className="text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Operacion"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className=" font-bold text-sm px-1 text-teal-600">
            Lugar de Procedencia
          </label>
          <input
            className=" text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Lugar de Procedencia"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col w-1/2">
          <label className=" font-bold text-sm px-1 text-teal-600">Email</label>
          <input
            className=" text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className=" font-bold text-sm px-1 text-teal-600">
            Antecedentes patologicos (personales y/o familiares)
          </label>
          <input
            className=" text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Antecedentes patologicos (personales y/o familiares)"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label className=" font-bold text-sm px-1 text-teal-600">
          Alergio a algun medicamento
        </label>
        <input
          className="w-full text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Alergio a algun medicamento"
        />
      </div>
      <div className="flex flex-col w-full ">
        <label className=" w-1/4 font-bold text-sm px-1 text-teal-600">
          C.O.P.
        </label>
        <input
          className="w-1/4 flex text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="C.O.P."
        />
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded flex w-32 justify-center">
          Guardar
        </button>
      </div>
    </div>
  );
}

export default Historias;
