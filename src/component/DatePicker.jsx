import DatePicker from "ocproject-jn-date-picker-react/dist/DatePicker";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
const millisecondsInASecond = 1000
export default function CustomDatePicker(props) {
    const [selectedDate, setSelectedDate] = useState(
        props.initialDate
    )

    const dateToTimestamp = (date) => {
        return Math.trunc(date.getTime() / millisecondsInASecond)
    }

    const handleDateChange = (date) => {
        if (date && date instanceof Date) {
            setSelectedDate(date)
            props.onTimestampChanged(dateToTimestamp(date))
        }
    }

    return (<DatePicker onDatePick={date => handleDateChange(date)}/>)
}

CustomDatePicker.propsType={
    onTimestampChanged: PropTypes.func
}