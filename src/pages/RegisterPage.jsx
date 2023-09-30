import FormularioRegister from "../components/FormularioRegister"
import {Link} from "react-router-dom"
function RegisterPage() {
  return (
    <div className="flex w-full h-screen">
        <div className="hidden lg:flex h-full w-1/2 items-center justify-center fondologin text-center shadow-2xl">
            
        </div>
        <div className="w-full flex flex-col items-center justify-center lg:w-1/2">
            <div className="w-full flex flex-row justify-center mb-10">
                <div className="">
                    <Link to= "/">
                        <button className="w-28 h-12 border border-blue-500 rounded-l-2xl hover:bg-blue-100 transition duration-300">Inicio sesión</button>
                    </Link>
                </div>
                <div className="">
                    <button className="w-28 h-12 border border-blue-500 bg-blue-500 text-white rounded-r-2xl "  disabled={true}>Registrarse</button>
                </div>
            </div>
            
            <FormularioRegister/>
        </div>
    </div>
  )
}

export default RegisterPage