import PropTypes from "prop-types";


export default function EmployeeRow (props) {

    return(<tr>
        <td>{props.employee.firstName}</td>
        <td>{props.employee.lastName}</td>
        <td>{props.employee.startDate}</td>
        <td>{props.employee.department}</td>
        <td>{props.employee.dateOfBirth}</td>
        <td>{props.employee.address.street}</td>
        <td>{props.employee.address.city}</td>
        <td>{props.employee.address.state}</td>
        <td>{props.employee.address.zipCode}</td>
    </tr>)
}

