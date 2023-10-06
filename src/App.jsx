import {BrowserRouter, Route, Routes} from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import EmployesPage from "./pages/EmployesPage"
import TimesheetPage from "./pages/TimesheetPage"
import TaskPage from "./pages/TaskPage"
import AccountPage from "./pages/AccountPage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/employes" element={<EmployesPage/>}/>
        <Route path="/timesheet" element={<TimesheetPage/>}/>
        <Route path="/task" element={<TaskPage/>}/>
        <Route path="/account" element={<AccountPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App