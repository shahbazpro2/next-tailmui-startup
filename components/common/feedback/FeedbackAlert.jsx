import React from 'react'
import SnakbarAlert from './SnakbarAlert.jsx'


const FeedbackAlert = ({ type, message, setFeedback }) => {
    return (
        <div>
            {message && <SnakbarAlert open={message.length ? true : false} handleClose={setFeedback} message={message} type={type} />}
        </div>
    )
}

export default FeedbackAlert