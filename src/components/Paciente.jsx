

const Paciente = ({ paciente, setPaciente,eliminarPaciente}) => {

    const {id,nombre,propietario,email,alta,sintomas} = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('Desea Eliminar el paciente - '+nombre);
        if (respuesta) {
            eliminarPaciente(id);
        }
    }

    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''}
                <span className="font-normal normal-case">{alta}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button className="py-2 px-10 bg-indigo-400 hover:bg-indigo-600 text-white rounded-lg font-bold uppercase " type="button" onClick={ () => setPaciente(paciente)}> 
                    Editar
                </button>
                <button className="py-2 px-10 bg-rose-400 hover:bg-rose-600 text-white rounded-lg font-bold uppercase " type="button" onClick={ handleEliminar}> 
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente
