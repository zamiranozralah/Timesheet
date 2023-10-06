import SideBar from "../components/SideBar"
function EmployesPage() {
  return (
    <div className="flex flex-row">
        <div>
            <SideBar/>
        </div>
        <div className="ml-2">
            <h1 className="text-2xl">Pagina empleados</h1>
        </div>
    </div>
  )
}

export default EmployesPage