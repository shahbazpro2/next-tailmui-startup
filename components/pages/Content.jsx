import { test1Api, testApi } from '@api/test'
import React from 'react'
import { useApi } from 'use-hook-api'

const Content = () => {
    //const [, { data, loading }] = useApi('content', { successMsg: true, errMsg: true }, testApi)
    const [getContent, { data, loading, refetch }] = useApi({ cache: 'content1', both: true }, test1Api())
    /*   const { isLoading } = useQuery('content3', testApi) */
    const refetchData = () => {
        getContent(testApi(4), null, null, { loading: false })
    }

    console.log('content', loading)

    return (
        <>
            {loading ? <div>Loading1...</div> :
                <div>{data?.title}
                    <button className='bg-secondary text-white p-3' onClick={refetchData}>Refetch content</button>
                </div>
            }
            {/*   <Content3 data={data} /> */}
        </>

    )
}

export default Content