import FeedbackAlert from '@common/feedback/FeedbackAlert'
import { FeedbackContext } from '@context/FeedbackContext'
import React, { useState } from 'react'

const FeedbackWrapper = ({ children }) => {
    const [state, setState] = useState({
        message: null,
        type: 'error'
    })

    const contextValue = {
        setFeedback: (message, type) => {
            setState({
                message,
                type
            })

        }
    }

    return (
        <>
            <FeedbackContext.Provider value={contextValue}>
                {children}
                <FeedbackAlert type={state.type} message={state.message} setFeedback={() => setState({ ...state, message: null })} />
            </FeedbackContext.Provider>
        </>
    )
}

export default FeedbackWrapper