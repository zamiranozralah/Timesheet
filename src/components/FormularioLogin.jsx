import {Link} from "react-router-dom"
function FormularioLogin() {
  return (
    <div className="bg-zinc-100 p-12 rounded-xl shadow-2xl">
        <section className="typing-animation">
          <h1 className="text-5xl font-semibold">Hola, <span className="text-blue-900 font-semibold">Bienvenido</span></h1>
          <h2 className="text-xl text-gray-500 font-medium mt-2 mb-2">Inicia sesión para continuar</h2>
        </section>
        <form>
            <div className="flex flex-col mb-4">
                <label className="text-xl">Correo electrónico</label>
                <input 
                  type="email" 
                  placeholder="Ingrese su email"
                  className="w-full p-4 bg-transparent border-b-2 border-gray-300 focus:outline-none "
                />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-xl">Contraseña</label>
              <input 
                type="password" 
                placeholder="Ingrese su contraseña"
                className="w-full p-4 bg-transparent border-b-2 border-gray-300 focus:outline-none"
              />
            </div>
            
            <div>
              <Link to="/home">
                <button className="w-full h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg text-white hover:bg-gradient-to-bl">Iniciar sesión</button>
              </Link>
            </div>
        </form>
        <div>
          <p>Olvidaste tu contraseña? <a href=""><span className="text-blue-800 font-bold">Haz click aqui</span></a></p>
        </div>
        
    </div>
  )
}

export default FormularioLogin