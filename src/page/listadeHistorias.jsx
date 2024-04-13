import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import {
  getHistoria,
} from "../request/historias";

function ListadeHistorias() {
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
    <div>
      <div className="flex flex-row justify-between px-24">
        <div className="w-[15%]"></div>
        <h2 className="text-3xl font-bold flex justify-center py-5 text-teal-500">
          Historias Clinicas
        </h2>
        <button
          onClick={() => {
            navigate("/historia");
          }}
          className="flex flex-row my-3  px-4 rounded items-center justify-center gap-1 bg-teal-700 text-white hover:bg-teal-600"
        >
          <svg
            className="h-6 w-6 "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="12" y1="5" x2="12" y2="19" />{" "}
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <div className=" font-bold">Nueva Historia</div>
        </button>
      </div>

      <div className=" px-24 py-1">
        <table className="table-auto w-full bg-white border border-gray-200 divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-teal-600 text-left text-md leading-4 font-medium text-white uppercase tracking-wider">
                H.C. N°
              </th>
              <th className="px-6 py-3 bg-teal-600  text-left text-md leading-4 font-medium text-white uppercase tracking-wider">
                Nombre y Apellido
              </th>
              <th className="px-6 py-3 bg-teal-600  text-left text-md leading-4 font-medium text-white uppercase tracking-wider">
                Paciente
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dataHistoria && dataHistoria.map((historia)=>{
              return(

              <tr
              className="hover:bg-gray-50"
              onClick={() => {
                navigate(`/historia/${historia.id}`);
              }}
              key={historia.id}
            >
              <td className="px-6 py-4 whitespace-no-wrap cursor-pointer select-none">
                {historia.id}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap cursor-pointer select-none">
                {historia.nombreyapellido}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap cursor-pointer select-none">
                {historia.thistoria}
              </td>
            </tr>
              )
            })}  
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListadeHistorias;
