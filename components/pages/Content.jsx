import { testApi } from '@api/test'
import useApi from '@utils/hooks/useApi'
import React from 'react'
import { useQuery } from 'react-query'
import Content3 from './Content3'

const Content = () => {
    //const [, { data, loading }] = useApi('content', { successMsg: true, errMsg: true }, testApi)
    const [getContent, { data, loading }] = useApi({ cache: 'content' }, () => testApi(1))
    /*   const { isLoading } = useQuery('content3', testApi) */


    const refetchData = () => {
        getContent(testApi(4), null, null, { loading: false })
    }

    console.log('content', loading)

    return (
        <>
            {loading ? <div>Loading...</div> :
                <div>{data?.title}
                    <button className='bg-secondary text-white p-3' onClick={refetchData}>Refetch content</button>
                </div>
            }
            {/*   <Content3 data={data} /> */}
        </>

    )
}

export default Content