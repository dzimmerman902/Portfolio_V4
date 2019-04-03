import styled, { css } from 'styled-components'
import portfolioTheme from '../themes/portfolio'

import Button from '../components/Button'
import Container from '../components/Container'

const Section = styled.section`
  height: 85rem;
  background-image: ${portfolioTheme.backgroundImage(0.6)},
    url('/static/devin-1.jpg');
  background-size: cover;

  ${({ theme }) => theme.response('medium', css`
    height: 70rem;
  `)}

  ${({ theme }) => theme.response('small', css`
    height: 60rem;
  `)}
`

const Header = styled.div`
  padding-top: 22rem;

  ${({ theme }) => theme.response('medium', css`
    padding-top: 18rem;
  `)}

  ${({ theme }) => theme.response('small', css`
    padding-top: 12rem;
  `)}
`

const Title = styled.div`
  color: ${props => props.theme.colorWhite};
  font-family: ${props => props.theme.fontFamilyPrimary};
  font-size: 9rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;

  margin-bottom: 2rem;

  ${({ theme }) =>
    theme.response(
      'large',
      css`
        text-align: center;
      `
    )}

  ${({ theme }) =>
    theme.response(
      'medium',
      css`
        font-size: 7rem;
      `
    )}

  ${({ theme }) =>
    theme.response(
      'medium',
      css`
        font-size: 5rem;
      `
    )}
`

const SubTitle = styled.div`
  color: ${props => props.theme.colorWhite};
  font-family: ${props => props.theme.fontFamilyPrimary};
  font-size: 3rem;
  letter-spacing: 2px;

  margin-bottom: 10rem;

  ${({ theme }) =>
    theme.response(
      'large',
      css`
        text-align: center;
      `
    )}
`

const ButtonCont = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-column-gap: 2rem;

  ${({ theme }) =>
    theme.response(
      'large',
      css`
        display: grid;
        justify-content: center;
      `
    )}
  ${({ theme }) => theme.response('x-small', css`
      grid-template-columns: auto;
      grid-row-gap: 2rem;
  `)}
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
          <Button
            color="light"
            link="/static/DevinResume.pdf"
            download="DevinResume">
            Resume
          </Button>
        </ButtonCont>
      </Header>
    </Container>
  </Section>
)

export default Banner
