import { testApi } from '@api/test'
import { Button } from '@mui/material'
import useApi from '@utils/hooks/useApi'
import React from 'react'

const Content4 = () => {
    const [refetch, { data, loading }] = useApi()

    const refetchData = () => {
        refetch(testApi(2))
    }
    console.log('content4')
    return (
        <>
            <div>{data?.title || 'pending'}</div>
            <Button onClick={refetchData}>Refetch form 4</Button>
        </>
    )
}

export default Content4