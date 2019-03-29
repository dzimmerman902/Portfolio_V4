import styled from 'styled-components'

const StyledParagraph = styled.p`
  color: ${({ color, theme }) => color || theme.colorGray};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: ${props => props.align || 'left'};
  text-transform: ${({ transform }) => transform || ''};

  margin-bottom: ${({ mb }) => mb || ''};
`

const Paragraph = ({ align, children, color, mb, style, transform }) => (
  <StyledParagraph
    align={align}
    color={color}
    mb={mb}
    style={style}
    transform={transform}>
    {children}
  </StyledParagraph>
)

export default Paragraph
