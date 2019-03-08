import styled from 'styled-components'

const StyledSection = styled.section`
  padding: 14rem 0;
`

const Section = ({ children }) => (
  <StyledSection>{children}</StyledSection>
)

export default Section