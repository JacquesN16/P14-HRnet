import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import EmployeeRow from "./EmployeeRow";
import constant from "../../utils/constant";

export default function EmployeeList (props) {

    const [data, setData] = useState([])

    const [entriesCount, setEntriesCount] = useState(constant.queryCounts[0])
    const [firstItemIdx, setFirstItemIdx] = useState(0)
    const [lastItemIdx, setLastItemIdx] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(()=>{
        setData(props.employeeList)
        setLastItemIdx(firstItemIdx + entriesCount)
    },[props.employeeList, entriesCount])

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
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Start Date</th>
                        <th>Department</th>
                        <th>Date of Birth</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((datum,idx)=>{
                        return<EmployeeRow key={idx} employee={datum}/>
                    })}
                </tbody>

            </table>
            <div className="w-100">
                <div className="w-100 d-flex justify-content-between">
                    <div>
                        Showing 0 to 0 of 0 entries
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

EmployeeList.prototype = {
    employeeList: PropTypes.array
}