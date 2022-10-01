import tw, { styled } from 'twin.macro'
export {
    CSContainer,
    CSVColCenter,
    CSVCenter,
    CSVHCenter
}

const CSContainer = styled.div`
${tw`xl:container px-5 sm:px-10 mx-auto`}
`

const CSVColCenter = styled.div`
${tw`flex justify-center flex-col`}
`

const CSVCenter = styled.div`
${tw`flex items-center`}
`

const CSVHCenter = styled.div`
${tw`flex justify-center items-center`}
`




