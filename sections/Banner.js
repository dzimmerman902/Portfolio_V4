import styled from 'styled-components'
import portfolioTheme from '../themes/portfolio'

import Button from '../components/Button'
import Container from '../components/Container'

const Section = styled.section`
  height: 85rem;
  background-image: ${portfolioTheme.backgroundImage(0.6)},
    url('/static/devin-1.jpg');
  background-size: cover;
`

const Header = styled.div`
  padding-top: 22rem;
`

const Title = styled.div`
  color: ${props => props.theme.colorWhite};
  font-family: ${props => props.theme.fontFamilyPrimary};
  font-size: 9rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;

  margin-bottom: 2rem;
`

const SubTitle = styled.div`
  color: ${props => props.theme.colorWhite};
  font-family: ${props => props.theme.fontFamilyPrimary};
  font-size: 3rem;
  letter-spacing: 2px;

  margin-bottom: 10rem;
`

const ButtonCont = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-column-gap: 2rem;
`

const Banner = () => (
  <Section id="home">
    <Container>
      <Header>
        <Title>Devin Zimmerman</Title>
        <SubTitle>Full Stack Web Developer</SubTitle>
        <ButtonCont>
          <Button color="light" link="#projects">
          Portfolio
          </Button>
          <Button color="light" link="/static/DevinResume.pdf" download="DevinResume">Resume</Button>
        </ButtonCont>
      </Header>
    </Container>
  </Section>
)

export default Banner
