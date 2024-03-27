function Historias() {
  return (
    <div className="w-screen px-20 py-10 flex gap-3 flex-col">
      <h1 className="text-3xl font-bold flex justify-center text-teal-900">
        Historias Clinicas
      </h1>
      <div className="flex gap-3 justify-end">
        <input
          className="w-[15%] text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          min={0}
          placeholder="H.C N°"
        />
        <input
          className="w-[15%] text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="FECHA"
        />
      </div>
      <h2 className="text-2xl font-bold text-teal-900">Datos de Afiliacion</h2>
      <div className="flex gap-3">
        <input
          className="w-[70%] text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Nombre y Apellido"
        />
        <input
          className="w-[30%] text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Edad"
        />
      </div>
      <div className="flex gap-3">
        <input
          className="w-[50%] text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Direccion"
        />
        <input
          className="w-[50%] text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Ref"
        />
      </div>
      <div className="flex gap-3 flex-wrap">
        <input
          className="w-[24%] text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          min={0}
          placeholder="Doc Ident"
        />
        <input
          className="w-[24%] text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Est Civil"
        />
        <input
          className="w-[24%] text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          min={0}
          placeholder="Telf. Fijo"
        />
        <input
          className="w-[25%] text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Cel"
          min={0}
        />
      </div>
      <div className="flex gap-3">
        <input
          className="w-[50%] text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Operacion"
        />
        <input
          className="w-[50%] text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Lugar de Procedencia"
        />
      </div>
      <div className="flex gap-3">
        <input
          className="w-[50%] text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Email"
        />
        <input
          className="w-[50%] text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Antecedentes patologicos (personales y/o familiares)"
        />
      </div>
      <input
        className="w-full text-teal-800 font-semibold shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Alergio a algun medicamento"
      />
      <div className="w-full flex justify-end">
        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded flex w-32 justify-center">
          Guardar
        </button>
      </div>
    </div>
  );
}

export default Historias;
