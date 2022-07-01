import FeedbackAlert from '@common/feedback/FeedbackAlert'
import { FeedbackContext } from '@context/FeedbackContext'
import React, { useState } from 'react'

const FeedbackWrapper = ({ children }) => {
    const [state, setState] = useState({
        error: null,
        success: null
    })

    const contextValue = {
        error: state.error,
        success: state.success,
        setFeedback: (message, error) => {
            error ?
                setState({ success: null, error: message }) : setState({ error: null, success: message })

        }
    }

    return (
        <>
            <FeedbackContext.Provider value={contextValue}>
                {children}
                <FeedbackAlert error={state.error} success={state.success} setError={() => setState({ ...state, error: null })} setSuccess={() => setState({ ...state, success: null })} />
            </FeedbackContext.Provider>
        </>
    )
}

export default FeedbackWrapper