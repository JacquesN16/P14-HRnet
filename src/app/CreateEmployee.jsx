import React, {useEffect, useState} from "react";
import {route} from "../utils/route";
import {Link} from "react-router-dom";
import * as constants from "../utils/constant";
import {InputGroup, Form, Modal} from "react-bootstrap";
import CustomDatePicker from "../component/DatePicker";

export default function CreateEmployee () {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state,setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('')
    const [isShowConfirm, setIsShowConfirm] = useState(false)

    const saveEmployee = (e) => {
        e.preventDefault()
        if(!firstname){
            alert("First name cannot be empty")
            return
        }

        if(!lastname){
            alert("Last name cannot be empty")
            return
        }

        if(!dateOfBirth){
            alert("Please select a date of birth")
            return
        }

        if(!startDate){
            alert("Please select a start date")
            return
        }

        if(!street || !city || !state || !zipCode){
            alert("Address information is not completed")
            return
        }

        if(!department){
            alert("Please select at least 1 department from the list")
            return
        }


        const newEmployee = {
            firstname,
            lastname,
            dateOfBirth,
            startDate,
            address:{
                street,
                city,
                state,
                zipCode
            },
            department
        }
        console.log(newEmployee)
        setIsShowConfirm(true)
    }

    const onStartDateChanged = (date) => {
        setStartDate(date)
    }

    const onDateOfBirthChanged = (date) => {
        setDateOfBirth(date)
    }


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
                        <InputGroup.Text>First name *</InputGroup.Text>
                        <Form.Control value={firstname} onChange={(e)=>setFirstname(e.target.value)} aria-label="First name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Last name *</InputGroup.Text>
                        <Form.Control value={lastname} onChange={(e)=>setLastname(e.target.value)} aria-label="Last name" />
                    </InputGroup>
                    <InputGroup className="mb-3" style={{zIndex: 20}}>
                        <InputGroup.Text>Date of Birth</InputGroup.Text>
                        <CustomDatePicker onTimestampChanged={onDateOfBirthChanged}/>
                    </InputGroup>
                    <InputGroup className="mb-3" style={{zIndex:10}}>
                        <InputGroup.Text>Start Date *</InputGroup.Text>
                        <CustomDatePicker onTimestampChanged={onStartDateChanged}/>

                    </InputGroup>
                    <div
                        className="card my-1"
                    >
                        <div
                            className="card-header"
                        >
                            Address *
                        </div>
                        <div
                            className="card-body"
                        >
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Street</InputGroup.Text>
                                <Form.Control value={street} onChange={(e)=>setStreet(e.target.value)} aria-label="Street" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>City</InputGroup.Text>
                                <Form.Control value={city} onChange={(e)=>setCity(e.target.value)}aria-label="City"/>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>State</InputGroup.Text>
                                <Form.Select value={state} onChange={(e)=>setState(e.target.value)} aria-label="State">
                                    <option value=""></option>
                                    {constants.states.map((state,idx)=>{
                                        return<option
                                            key={idx + state.abbreviation}
                                            value={state.name}
                                        >
                                            {state.name}
                                        </option>
                                    })}
                                </Form.Select>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Zip Code</InputGroup.Text>
                                <Form.Control value={zipCode} onChange={(e)=>setZipCode(parseInt(e.target.value))} type="number" aria-label="zipCode" />
                            </InputGroup>
                        </div>
                    </div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Department *</InputGroup.Text>
                        <Form.Select value={department}
                                     onChange={(e)=>setDepartment(e.target.value)}
                                     aria-label="Deparment">
                            <option value=""></option>
                            {constants.department.map((d,idx)=>{
                                return<option
                                    key={idx + d}
                                    value={d}
                                >
                                    {d}
                                </option>
                            })}
                        </Form.Select>
                    </InputGroup>
                    <div
                        className="w-100"
                    >
                        <button
                            className="btn btn-success"
                            onClick={(e)=>saveEmployee(e)}
                        >
                            Save
                        </button>
                    </div>
                </Form>
            </div>
        </div>
        <Modal
            show={isShowConfirm}
            onHide={()=>setIsShowConfirm(false)}
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <p>Employee Created !</p>
            </Modal.Body>
        </Modal>
    </>)
}