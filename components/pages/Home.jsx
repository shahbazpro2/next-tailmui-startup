import React, { useState } from 'react'
import Content from './Content'
import Content2 from './Content2'
import Content3 from './Content3'
import Content5 from './Content5'

const Home = () => {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    return (
        <div>
            <button className='bg-primary rounded-sm m-5 p-2' onClick={() => setShow(!show)}>{show ? 'Hide Content' : 'Show Content'}</button>
            <button className='bg-primary rounded-sm m-5 p-2' onClick={() => setShow2(!show2)}>{show2 ? 'Hide Content' : 'Show Content'}</button>
            {/*  <Content5 /> */}
            {show && <Content />}
            {show2 && <Content2 />}
            {<Content3 />}
        </div>
    )
}

export default Home