import tw, { styled } from 'twin.macro'
export { CSH3 }

const fontWeight = ({ bold, semibold, medium, light }) => {
    if (bold) return tw`font-bold`
    else if (semibold) return tw`font-semibold`
    else if (medium) return tw`font-medium`
    else if (light) return tw`font-light`
}

const FontHeading = styled.div` 
${props => fontWeight(props)}
`

const CSH3 = styled(FontHeading)`
    ${tw`text-3xl`}
`