import styled from 'styled-components'
import portfolioTheme from '../themes/portfolio'

import Button from '../components/Button'
import Container from '../components/Container'

const StyledBanner = styled.section`
  height: 95vh;
  background-image: ${portfolioTheme.backgroundImage()},
    url('/static/devin-1.jpg');
  background-size: cover;
`

const StyledHeader = styled.div`
  padding-top: 22rem;
`

const StyledHeaderTitle = styled.div`
  color: ${props => props.theme.colorWhite};
  font-family: ${props => props.theme.fontFamilyPrimary};
  font-size: 9rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;

  margin-bottom: 2rem;
`

const StyledHeaderSubText = styled.div`
  color: ${props => props.theme.colorWhite};
  font-family: ${props => props.theme.fontFamilyPrimary};
  font-size: 3rem;
  letter-spacing: 2px;

  margin-bottom: 10rem;
`

const Banner = () => (
  <StyledBanner>
    <Container>
      <StyledHeader className="header">
        <StyledHeaderTitle className="title">Devin Zimmerman</StyledHeaderTitle>
        <StyledHeaderSubText className="sub-text">Full Stack Web Developer</StyledHeaderSubText>
        <Button color="light">Portfolio</Button>
      </StyledHeader>
    </Container>
  </StyledBanner>
)

export default Banner
