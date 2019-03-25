import styled from 'styled-components'
import portfolioTheme from '../themes/portfolio'

import Button from '../components/Button'
import Container from '../components/Container'

const Section = styled.section`
  height: 95vh;
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

const Banner = () => (
  <Section>
    <Container>
      <Header>
        <Title>Devin Zimmerman</Title>
        <SubTitle>Full Stack Web Developer</SubTitle>
        <Button color="light">Portfolio</Button>
      </Header>
    </Container>
  </Section>
)

export default Banner
