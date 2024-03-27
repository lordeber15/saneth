import { useNavigate } from "react-router-dom";
function ListadeHistorias() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-3xl font-bold flex justify-center py-5 text-teal-700">
        Historias Clinicas
      </h2>
      <div className=" px-24 py-1">
        <table className="table-auto w-full bg-white border border-gray-200 divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-teal-600 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                H.C. N°
              </th>
              <th className="px-6 py-3 bg-teal-600  text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                Nombre y Apellido
              </th>
              <th className="px-6 py-3 bg-teal-600  text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                Paciente
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr
              className="hover:bg-gray-50"
              onClick={() => {
                navigate("/historia");
              }}
            >
              <td className="px-6 py-4 whitespace-no-wrap cursor-pointer select-none">
                001
              </td>
              <td className="px-6 py-4 whitespace-no-wrap cursor-pointer select-none">
                Eberson Palomino Aguilar
              </td>
              <td className="px-6 py-4 whitespace-no-wrap cursor-pointer select-none">
                Adulto
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-no-wrap cursor-pointer select-none">
                002
              </td>
              <td className="px-6 py-4 whitespace-no-wrap cursor-pointer select-none">
                Noelia ...
              </td>
              <td className="px-6 py-4 whitespace-no-wrap cursor-pointer select-none">
                Adulto
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListadeHistorias;
