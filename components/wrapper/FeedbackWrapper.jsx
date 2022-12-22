import FeedbackAlert from '@common/feedback/FeedbackAlert'
import { atom, useAtom } from 'jotai'
import React from 'react'

export const feedbackAtom = atom({
    message: null,
    type: 'error'
})

const FeedbackWrapper = () => {
    const [state, setState] = useAtom(feedbackAtom)
    console.log('st', state)
    return (
        <>
            <FeedbackAlert type={state.type} message={state.message} setFeedback={() => setState({ ...state, message: null })} />
        </>
    )
}

export default FeedbackWrapper