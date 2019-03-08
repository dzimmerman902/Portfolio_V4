import styled from 'styled-components'
import portfolioTheme from '../themes/portfolio'

import Button from '../components/Button'
import Container from '../components/Container'

const StyledBanner = styled.section`
  height: 95vh;
  background-image: ${portfolioTheme.backgroundImage()}, url('/static/devin-1.jpg');
  background-size: cover;
`

const StyledHeader = styled.div`
  padding-top: 22rem;

  & .title {
    color: ${props => props.theme.colorWhite};
    font-family: ${props => props.theme.fontFamilyPrimary};
    font-size: 7rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;

    margin-bottom: 2rem;
  }

  & .sub-text {
    color: ${props => props.theme.colorWhite};
    font-family: ${props => props.theme.fontFamilyPrimary};
    font-size: 2rem;
    letter-spacing: 2px;

    margin-bottom: 10rem;
  }
`

const Banner = () => (
  <StyledBanner>
    <Container>
      <StyledHeader className="header">
        <div className="title">Devin Zimmerman</div>
        <div className="sub-text">Full Stack Web Developer</div>
        <Button color="light">Portfolio</Button>
      </StyledHeader>
    </Container>
  </StyledBanner>
)

export default Banner