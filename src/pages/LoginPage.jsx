import FormularioLogin from "../components/FormularioLogin"
import { Link } from "react-router-dom"
function LoginPage() {
  return (
    <div className="flex w-full h-screen">
        
        <div className="w-full flex flex-col items-center justify-center lg:w-1/2">
            <div className="w-full flex flex-row justify-center mb-10">
                <div className="">
                    <button className="w-28 h-12 border border-blue-500 bg-blue-500 text-white rounded-l-2xl" disabled={true}>Inicio sesión</button>
                </div>
                <div className="">
                    <Link to="/register">
                        <button className="w-28 h-12 border border-blue-500 rounded-r-2xl hover:bg-blue-100 transition duration-300">Registrarse</button>
                    </Link>
                </div>
            </div>
            
            
            <FormularioLogin/>
        </div>
        <div className="hidden lg:flex h-full w-1/2 items-center justify-center fondologin text-center shadow-2xl">
            
        </div>
    </div>
  )
}

export default LoginPage