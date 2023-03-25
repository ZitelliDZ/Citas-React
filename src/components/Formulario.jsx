import { useState, useEffect } from 'react'
import Error from './Error';

// const [cliente, setCliente] = useState({});
// const [total,setTotal] = useState(0);
// const [clientes, setClientes] = useState([]);
// const [modal, setModal] = useState(false);


const Formulario = ({ paciente, setPaciente, pacientes, setPacientes }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);


  const limpiarForm = () => {
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
    setError(false);
  }

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    } else {
      limpiarForm();
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      console.log('Hay un campo vacio');
      setError(true);
      return;
    }

    setError(false);
    console.log('Enviando form');

    //Contruir Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas
    }

    if(paciente.id){
      //edit
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState );
      setPacientes(pacientesActualizados);    
      setPaciente({});

    }else{
      //nuevo
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    limpiarForm();
  }

  return (
    <div className=" md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>
      <p className=" font-bold text-lg text-center mb-14">Añade Pacientes y {""}
        <span className="text-red-600"> Administralos</span>
      </p>


      <form action="" className=" bg-white shadow-md rounded-lg px-5 py-5 mb-5 mt-10" onSubmit={handleSubmit}>
        {error &&
          //<Error
          //mensaje="Todos los campos son obligatorios"
          ///>
          <Error> <p> Todos los campos son obligatorios!</p></Error>
        }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input type="text" id="mascota" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input type="text" id="propietario" placeholder="Nombre del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " value={propietario} onChange={(e) => setPropietario(e.target.value)} />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input type="email" id="email" placeholder="Email Contacto Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input type="date" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " value={alta} onChange={(e) => setAlta(e.target.value)} />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea name="sintomas" id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder='Describe los sintomas' value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
        </div>
        {!paciente.id ? 
            (<input type="submit" className=" bg-indigo-600 w-full p-3 text-white font-bold hover:bg-slate-500 cursor-pointer transition-color uppercase" value="Agregar Paciente" />
        ) : 
            (
            <input type="submit" className="bg-amber-600 w-full p-3 text-white  font-bold hover:bg-amber-500 cursor-pointer transition-color uppercase" value="Editar Paciente" />
        )}
      </form>


    </div>
  )
}

export default Formulario
