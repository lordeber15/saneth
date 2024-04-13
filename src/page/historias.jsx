import { useNavigate, useParams } from "react-router-dom";
import { getHistoria } from "../request/historias";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
function Historias() {
  
  const navigate = useNavigate();
  const {
    isLoading,
    data: dataHistoria,
    isError,
    error,
  } = useQuery({
    queryKey: ["historia"],
    queryFn: getHistoria,
  });
  const {id} = useParams();
  const [isNewHistoria, setIsNewHistoria] = useState(true); // Variable para controlar si es una nueva historia o una existente
  const [historiaData, setHistoriaData] = useState({}); // Estado para almacenar los datos de la historia
  useEffect(() => {
    if (id && dataHistoria) {
      // Si hay un ID y los datos de la historia están disponibles
      const historia = dataHistoria.find((historia) => historia.id === id);
      if (historia) {
        setIsNewHistoria(false);
        setHistoriaData(historia);
      }
    } else {
      setIsNewHistoria(true);
      // Reseteamos los datos de la historia si no hay un ID válido
      setHistoriaData({});
    }
  }, [id, dataHistoria]);

  const handleSaveOrUpdate = () => {
    if (isNewHistoria) {
      // Si es una nueva historia, guardar los datos
      // Aquí deberías hacer la lógica para guardar los datos de la nueva historia
    } else {
      // Si es una historia existente, actualizar los datos
      // Aquí deberías hacer la lógica para actualizar los datos de la historia existente
    }
  };

  const [idh,setId]= useState("");
  const [hcn,setHcn]= useState("");
  const [fecha,setFecha]= useState("");
  const [thistoria,setThistoria]= useState("");
  const [nombreyapellido,setNombreyapellido]= useState("");
  const [edad,setEdad]= useState(0);
  const [direccion,setDireccion]= useState("");
  const [referenia,setReferencia]= useState("");
  const [dni,setDni]= useState(0);
  const [estadocivil,setEstadocivil]= useState("");
  const [telefono,setTelefono]= useState(0);
  const [celular,setcelular]= useState(0);
  const [operacion,setOperacion]= useState("");
  const [lugarprocedencia,setLugarprocedencia]= useState("");
  const [email,setEmail]= useState("");
  const [antecedentes,setAntecedentes]= useState("");
  const [alergias,setAlergias]= useState("");
  const [copUsuario,setCopUsuario]= useState(0);
  
  const handlereset = ()=>{
    setHcn("")
    setFecha("")
    setThistoria("")
    setNombreyapellido("")
    setEdad("")
    setDireccion("")
    setReferencia("")
    setDni("")
    setEstadocivil("")
    setTelefono("")
    setcelular("")
    setOperacion("")
    setLugarprocedencia("")
    setEmail("")
    setAntecedentes("")
    setAlergias("")
    setCopUsuario("")
  }
   

  if (isLoading) {
    return (
     
  <div className=" flex flex-col justify-center px-20 py-14 ">
    <div className="animate-pulse flex w-full ">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
    <div className="animate-pulse flex w-full">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
    <div className="animate-pulse flex w-full">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
</div>
      
    );
  } else if (isError) {
    return <div className={""}>Error: {error.message}</div>;
  }


  return (
    <div className="w-screen px-28 py-10 flex gap-3 flex-col">
      <div className="flex justify-between">
        <button
          onClick={() => {
            navigate("/dashboard");
            handlereset()
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
            value={historiaData.hcn || ""}
            
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
        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded flex w-32 justify-center" onClick={handleSaveOrUpdate}>
          {isNewHistoria ? "Guardar" : "Actualizar"}
        </button>
      </div>
    </div>
  );
}

export default Historias;
