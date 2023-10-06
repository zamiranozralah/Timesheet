import SideBar from "../components/SideBar"
function TaskPage() {
  return (
    <div className="flex flex-row">
        <div>
            <SideBar/>
        </div>
        <div className="ml-2">
            <h1 className="text-2xl">Pagina Task</h1>
        </div>
    </div>
  )
}

export default TaskPage