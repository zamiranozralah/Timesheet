import { useState } from "react";
import ico from "../assets/react.svg";
import {Link} from "react-router-dom"
function SideBar() {
  const [open, setOpen] = useState(true);
  const menuOpcion = [
    { nombre: "Inicio", srcImg: "home",route: "/home" },
    { nombre: "Empleados", srcImg: "empleados", route: "/employes" },
    { nombre: "Tabla de horarios", srcImg: "timesheet" ,route:"/timesheet" },
    { nombre: "Tareas", srcImg: "task", route:"/task" },
    { nombre: "Cuenta", srcImg: "cuenta", bottom: true ,route:"/account" },
  ];
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-blue-800 relative`}
      >
        <button
          className={`absolute cursor-pointer -right-3 top-[21rem] w-7 rounded-md border border-blue-800 bg-blue-700 shadow-2xl ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        >
          <img src="../../public/oneArrow.png" alt="" />
        </button>
        <div className="flex gap-x-4 items-center">
          <img src={ico} className={`cursor-pointer duration-500`} />
          <h1
            className={` text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Timesheet
          </h1>
        </div>

        <ul className="pt-6">
          {menuOpcion.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <Link to={item.route}>
              <li
                key={index}
                className={`flex items-center text-sm cursor-pointer p-2 rounded-md hover:bg-blue-900 gap-x-4 ${
                item.bottom ? "mt-64" : "mt-4"
                }`}
              >
                <img src={`./src/assets/${item.srcImg}.png`} className="w-8" />
                <span
                  className={`${
                    !open && "hidden"
                  } text-gray-200 origin-left text-md duration-200`}
                >
                  {item.nombre}
                </span>
              </li>
            </Link>
            
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
