import React, {useEffect, useState} from "react";
import {route} from "../utils/route";
import {Link} from "react-router-dom";
import * as constants from "../utils/constant";
import {InputGroup, Form} from "react-bootstrap";

export default function CreateEmployee () {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const saveEmployee = () => {

    }
    useEffect(()=>{
        console.log(firstname)
    },[firstname])

    return(<>
        <div className="row">
            <h1>HRnet</h1>
            <Link to={route.list}>View Current Employees</Link>
        </div>
        <div className="card w-50 mx-auto">
            <div className="card-header">
                Create Employee
            </div>
            <div className="card-body">
                <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>First name</InputGroup.Text>
                        <Form.Control aria-label="First name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Last name</InputGroup.Text>
                        <Form.Control aria-label="First name" />
                    </InputGroup>
                </Form>
            </div>

        </div>
    </>)
}