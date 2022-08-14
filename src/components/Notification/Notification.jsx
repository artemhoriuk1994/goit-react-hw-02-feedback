import React from "react";
import PropTypes from 'prop-types'
import { Box } from "components/Box.Styled";
import { Message } from "./Notification.styled";

const Notification = ({ message }) => {
    return (<Box mt='10px'>
        <Message>{message}</Message>
    </Box>)
}

Notification.propTypes = {
    message: PropTypes.string
}

export default Notification