import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 114rem;
`

const Container = ({ children }) => (
  <StyledContainer className="container">{children}</StyledContainer>
)

export default Container
