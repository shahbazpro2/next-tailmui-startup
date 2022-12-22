import React, { memo } from 'react'
import Content4 from './Content4'

const Content3 = ({ data }) => {
    console.log('content3', data)
    return (
        <div>
            <Content4 />
        </div>
    )
}

export default Content3