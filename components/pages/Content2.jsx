import { testApi } from '@api/test'
import { Button } from '@mui/material'
import React from 'react'
import { useApi } from 'use-hook-api'

const Content2 = () => {
    const [getContent2, { data, loading }] = useApi({ cache: 'content2' }, () => testApi(1))
    /* const { data, status, isLoading, refetch } = useQuery('content2', testApi) */
    const refetchData = () => {
        //refetchAtom?.(testApi(), null, null, { loading: false })
    }
    const refetchContent2 = () => {
        getContent2(testApi(3), null, null, { loading: false })
    }
    console.log('content2', data, loading)
    return (
        <>
            {loading ? <div>Loading...</div> :
                <div>{data?.title}
                    <button className='bg-secondary text-white p-3' onClick={refetchData}>Refetch content1</button>
                    <Button onClick={refetchContent2}>getContent2</Button>
                </div>
            }
        </>

    )
}

export default Content2