import './App.css';

import {Routes, Route} from 'react-router-dom'
import CreateEmployee from "./app/CreateEmployee";
import {route} from "./utils/route";
import EmployeeList from "./app/EmployeeList/EmployeeList";
import createEmployee from "./utils/mockData"
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setEmployee} from "./app/reducer/reducer";
function App() {
    const dispatch = useDispatch()
    const employeeList = createEmployee(100)

    useEffect(()=>{
        dispatch(setEmployee(employeeList))
    },[employeeList])


  return (
          <div className="App">
              <Routes>
                  <Route path={route.home} element={<CreateEmployee/>} />
                  <Route path={route.list} element={<EmployeeList/>}/>
              </Routes>
          </div>


  );
}

export default App;
