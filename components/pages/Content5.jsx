import { testApi } from '@api/test'
import { Button } from '@mui/material'
import useApi from '@utils/hooks/useApi'
import React from 'react'
import { useQuery } from 'react-query'

const Content5 = () => {
    const { data, loading, executeApi: getContent5 } = useApi('content5', {}, testApi)
    /* const { data, status, isLoading, refetch } = useQuery('content2') */


    const fetchData = () => {
        refetch()
    }
    console.log('content5', data)

    return (
        <div>Content5

            {loading && <div>Loading...</div>}
            <Button onClick={fetchData}>fetch</Button>
        </div>
    )
}

export default Content5