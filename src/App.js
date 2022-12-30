import './App.css';

import {Routes, Route} from 'react-router-dom'
import CreateEmployee from "./app/CreateEmployee";
import {route} from "./utils/route";
import EmployeeList from "./app/EmployeeList/EmployeeList";
import createEmployee from "./utils/mockData"
function App() {

    const employeeList = createEmployee(20)

  return (
          <div className="App">
              <Routes>
                  <Route path={route.home} element={<CreateEmployee/>} />
                  <Route path={route.list} element={<EmployeeList employeeList={employeeList}/>}/>
              </Routes>
          </div>


  );
}

export default App;
