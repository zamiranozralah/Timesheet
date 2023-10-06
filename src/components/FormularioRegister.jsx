import { Link } from "react-router-dom"
function FormularioRegister() {
  return (
    <div className="bg-zinc-100 p-12 rounded-xl shadow-2xl">
        <section className="typing-animation">
          <h1 className="text-5xl font-semibold">Regístrate en <span className="text-blue-900 font-semibold">segundos</span></h1>
          <h2 className="text-xl text-gray-500 font-medium mt-2 mb-2">y comienza a disfrutar de nuestros servicios</h2>
        </section>
        <form>
            <div className="flex flex-col mb-4">
                <label className="text-xl">Nombre de usuario</label>
                <input 
                  type="text" 
                  placeholder="Ingrese un nombre de usuario"
                  className="w-full p-4 bg-transparent border-b-2 border-gray-300 focus:outline-none "
                />
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-xl">Correo electrónico</label>
                <input 
                  type="email" 
                  placeholder="Ingrese un email"
                  className="w-full p-4 bg-transparent border-b-2 border-gray-300 focus:outline-none "
                />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-xl">Contraseña</label>
              <input 
                type="password" 
                placeholder="Ingrese una contraseña"
                className="w-full p-4 bg-transparent border-b-2 border-gray-300 focus:outline-none"
              />
            </div>
            <div>
              <Link to="/home">
                <button className="w-full h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg text-white hover:bg-gradient-to-bl transition duration-300">Registrar</button>
              </Link>
             
            </div>
        </form>
        <div className="mt-4">
            <p>Ya tenes cuenta ? <a href="/"><span className="text-blue-800 font-bold">Ingresa aca</span></a></p>
        </div>

        
    </div>
  )
}

export default FormularioRegister