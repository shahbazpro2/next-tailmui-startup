import FeedbackAlert from '@common/feedback/FeedbackAlert'
import React from 'react'
import { useFeedbackState } from 'use-hook-api'

const FeedbackWrapper = () => {
    const [feedbackState, clearFeedback] = useFeedbackState()
    const { message, type } = feedbackState
    console.log('typefeed', type)
    return (
        <>

            <FeedbackAlert type={type} message={message} setFeedback={clearFeedback} />
        </>
    )
}

export default FeedbackWrapper