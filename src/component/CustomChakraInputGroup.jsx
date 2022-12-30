import {Input, InputGroup, InputLeftAddon} from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function CustomChakraInputGroup(props) {

    return(<>
        <InputGroup size={props.size}>
            <InputLeftAddon children={props.label} />
            <Input
                id={props.id}
                onChange={(e)=>props.onChange(e.target.value)} />

        </InputGroup>
    </>)
}

CustomChakraInputGroup.propsType= {
    size: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func
}