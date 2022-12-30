import PropTypes from "prop-types";


export default function EmployeeRow (props) {

    return(<tr>
        <td>{props.employee.firstName}</td>
        <td>{props.employee.lastName}</td>
        <td>{props.employee.startDate}</td>
        <td>{props.employee.department}</td>
        <td>{props.employee.dateOfBirth}</td>
        <td>{props.employee.street}</td>
        <td>{props.employee.city}</td>
        <td>{props.employee.state}</td>
        <td>{props.employee.zipCode}</td>
    </tr>)
}

