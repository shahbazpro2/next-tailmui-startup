import tw, { styled } from 'twin.macro'
export { CSH, CSH1, CSH2, CSH3, CSH4, CSH5, CSH6, CSH7, CSH8 }

const fontWeight = ({ bold, semibold, medium, light }) => {
    if (bold) return tw`font-bold`
    else if (semibold) return tw`font-semibold`
    else if (medium) return tw`font-medium`
    else if (light) return tw`font-light`
}

const FontHeading = styled.h1` 
${props => fontWeight(props)}
`

const CSH = styled(FontHeading)`
    ${tw`text-sm`}
`

const CSH1 = styled(FontHeading)`
    ${tw`text-sm sm:text-base`}
`
const CSH2 = styled(FontHeading)`
    ${tw`text-base sm:text-lg`}
`
const CSH3 = styled(FontHeading)`
    ${tw`text-base lg:text-xl`}
`
const CSH4 = styled(FontHeading)`
    ${tw`text-base sm:text-lg lg:text-xl 2xl:text-2xl`}
`
const CSH5 = styled(FontHeading)`
    ${tw`text-3xl`}
`
const CSH6 = styled(FontHeading)`
    ${tw`text-xl sm:text-2xl xl:text-4xl`}
`
const CSH7 = styled(FontHeading)`
    ${tw`text-2xl sm:text-3xl xl:text-5xl`}
`
const CSH8 = styled(FontHeading)`
    ${tw`text-2xl sm:text-3xl lg:text-5xl 2xl:text-6xl`}
`