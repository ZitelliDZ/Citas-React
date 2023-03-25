
import Paciente from "./Paciente";


const ListadoPacientes = ({ pacientes, setPaciente,eliminarPaciente}) => {

  

  return (
    <div className="md:w-1/2  lg:w-10/12 mx-auto ">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-gray-700 mb-10 text-xl font-bold text-center">
            Administra tus {''}
            <span className=" text-indigo-600">Pacientes y Citas</span>
          </p>

          <div className="md:h-screen overflow-scroll mt-10">

            {pacientes.map((paciente) => {

              return <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />;

            })}

          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-gray-700 mb-10 text-xl font-bold text-center">
            Comienza agregando {''}
            <span className=" text-indigo-600">Pacientes y Citas</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes
