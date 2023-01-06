import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import EmployeeRow from "./EmployeeRow";
import constant from "../../utils/constant";
import Pager from "../../component/Pager";
import {useSelector} from "react-redux";

export default function EmployeeList () {

    const employeeList = useSelector( s => s.global.employee)
    const [data, setData] = useState([])
    const [entriesCount, setEntriesCount] = useState(constant.queryCounts[0])
    const [firstItemIdx, setFirstItemIdx] = useState(0)
    const [lastItemIdx, setLastItemIdx] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')


    const compareData = (
        key
    ) => {
        return (a,b)=>{
            if(a[key] < b[key]) return -1
            if(a[key] > b[key]) return 1
            return 0
        }
    }

    const sortData = (
        key
    ) => {
        let copyData = [...data]
        copyData.sort(compareData(key))
        setData(copyData)
    }



    useEffect(()=>{
        const list = employeeList.slice(firstItemIdx, lastItemIdx)
        setData(list)
    },[firstItemIdx,employeeList])

    useEffect(()=>{
            setFirstItemIdx(entriesCount*pageNumber)
            setLastItemIdx(data.length + entriesCount*pageNumber)
    },[pageNumber])

    useEffect(()=>{
        const length = employeeList.length || 0
        setPageCount(length/entriesCount)
    },[employeeList, entriesCount])

    useEffect(()=>{
        const newData = employeeList.slice(0,entriesCount)
        setData(newData)
        setLastItemIdx(firstItemIdx + newData.length)
    },[entriesCount, employeeList])

    useEffect(()=>{
        if(searchQuery && searchQuery.length >= 3){
            let searchQueryLowerCase = searchQuery.toLowerCase()

            let newData = data.filter( datum =>
                datum.firstName.toLowerCase() === searchQueryLowerCase
                || datum.lastName.toLowerCase() === searchQueryLowerCase
                || datum.street.toLowerCase() === searchQueryLowerCase
                || datum.department.toLowerCase() === searchQueryLowerCase
                || datum.state.toLowerCase() === searchQueryLowerCase
                || datum.city.toLowerCase() === searchQueryLowerCase
            )

            if(newData && newData.length >=1){
                setData(newData)
            }
        }else{
            setData(employeeList.slice(firstItemIdx, lastItemIdx))
        }

    },[searchQuery, employeeList])

    useEffect(()=>{
        setData(employeeList.slice(0,entriesCount))
    },[])


    return(<>
        <div id="employee-div" className="table-responsive row">
            <h3>Current Employees</h3>
            <div className="d-flex justify-content-between">
                <div>
                    <span>Show</span>
                    <select
                        value={entriesCount}
                        className="mx-1"
                        onChange={(e)=>setEntriesCount(parseInt(e.target.value))}
                    >
                        {constant.queryCounts.map((count, idx)=>{
                            return<option key={idx} value={count}>{count}</option>
                        })}
                    </select>
                    <span>entries</span>
                </div>
                <div>
                    <span>Search : </span>
                    <input
                        value={searchQuery}
                        onChange={(e)=>setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <Pager
                    pageNumber={pageNumber}
                    pageCount={pageCount}
                    onPageChanged={setPageNumber}
                    pageItemCount={entriesCount}
                />
            </div>
            <table className="table table-striped col-12">
                <thead className="col-12">
                    <tr>
                        <th>First Name
                            <button
                                className="btn btn-default"
                                onClick={()=>sortData('firstName')}>
                                <i className="fa-sharp fa-solid fa-sort"></i>
                            </button>
                        </th>
                        <th>Last Name
                            <button
                                className="btn btn-default"
                                onClick={()=>sortData('lastName')}>
                                <i className="fa-sharp fa-solid fa-sort"></i>
                            </button>
                        </th>
                        <th>Start Date
                            <button
                                className="btn btn-default"
                                onClick={()=>sortData('startDate')}>
                                <i className="fa-sharp fa-solid fa-sort"></i>
                            </button>
                        </th>
                        <th>Department
                            <button
                                className="btn btn-default"
                                onClick={()=>sortData('department')}>
                                <i className="fa-sharp fa-solid fa-sort"></i>
                            </button>
                        </th>
                        <th>Date of Birth
                            <button
                                className="btn btn-default"
                                onClick={()=>sortData('dateOfBirth')}>
                                <i className="fa-sharp fa-solid fa-sort"></i>
                            </button>
                        </th>
                        <th>Street
                            <button
                                className="btn btn-default"
                                onClick={()=>sortData('street')}>
                                <i className="fa-sharp fa-solid fa-sort"></i>
                            </button>
                        </th>
                        <th>City
                            <button
                                className="btn btn-default"
                                onClick={()=>sortData('city')}>
                                <i className="fa-sharp fa-solid fa-sort"></i>
                            </button>
                        </th>
                        <th>State
                            <button
                                className="btn btn-default"
                                onClick={()=>sortData('state')}>
                                <i className="fa-sharp fa-solid fa-sort"></i>
                            </button>
                        </th>
                        <th>Zip Code
                            <button
                                className="btn btn-default"
                                onClick={()=>sortData('zipCode')}>
                                <i className="fa-sharp fa-solid fa-sort"></i>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody className="col-12">
                    {(data.length >0) ? data.map((datum,idx)=>{
                        return<EmployeeRow key={idx} employee={datum}/>
                    }) : <div className="text-center">No data available in table</div>}
                </tbody>
            </table>
            <div className="w-100">
                <div className="w-100 d-flex justify-content-between">
                    <div>
                        Showing {firstItemIdx + 1} to {lastItemIdx} of {employeeList.length} entries
                    </div>
                    <div className="d-flex">
                        <div className=" mx-3">
                            <button
                                className="btn btn-sm"
                            >
                                Previous
                            </button>
                        </div>
                        <div>
                            <button
                                className="btn btn-sm"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={"/"}>Home</Link>
        </div>
    </>)
}

