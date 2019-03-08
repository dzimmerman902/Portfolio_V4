import styled from 'styled-components'
import theme from '../themes/portfolio'

const StyledParagraph = styled.p`
  color: ${props => props.theme.colorGrey};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: ${props => props.align || 'left'};
`

const Paragraph = ({ align, children }) => (
  <StyledParagraph align={align}>{children}</StyledParagraph>
)

export default Paragraph