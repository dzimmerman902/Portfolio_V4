import styled, { css } from 'styled-components'

import Button from '../components/Button'
import Container from '../components/Container'
import Form from '../components/Form'
import Heading from '../components/Heading'
import Input from '../components/Input'
import Row from '../components/Row'
import TextArea from '../components/TextArea'

const Section = styled.div`
  background-image: ${({ theme }) => theme.backgroundImage(1)},
    url('/static/union-station.jpg');
  background-size: cover;
  background-position: bottom;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-column-gap: 12rem;
  grid-row-gap: 12rem;
  grid-template-areas: 'findMe connected';

  ${({ theme }) =>
    theme.response(
      'medium',
      css`
        grid-template-columns: 1fr;
        grid-template-areas:
          'connected'
          'findMe';
      `
    )};
`

const Label = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.4rem;

  margin-bottom: ${({ mb }) => mb || '0.8rem'};

  ${({ theme }) =>
    theme.response(
      'medium',
      css`
        text-align: center;
      `
    )};
`

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colorWhite};
  font-size: 2.4rem;
  font-weight: 600;

  display: block;
  margin-bottom: ${({ mb }) => mb || '0.8rem'};

  ${({ theme }) =>
    theme.response(
      'medium',
      css`
        text-align: center;
      `
    )};
`

const ButtonCont = styled.div`
  ${({ theme }) => theme.response('medium', css`
    text-align: center;
  `)};
`

const Connected = styled.div`
  grid-area: findMe;
`

const FindMe = styled.div`
  grid-area: connected;
`

const Contact = () => (
  <Section id="contact">
    <Container>
      <Row>
        <Content>
          <Connected>
            <Form>
              <Heading align="center" size={1}>
                Get Connected
              </Heading>

              <Input label="Name" />

              <Input label="Email" />

              <Input label="Phone Number" />

              <TextArea label="Message" />

              <Button color="primary">
                <i>Coming Soon</i>
              </Button>
            </Form>
          </Connected>
          <FindMe>
            <Label>FIND ME ON THE WEB</Label>

            <Link
              href="https://linkedin.com/in/devin-zimmerman"
              target="_blank"
              rel="noopener noreferrer">
              linkedin
            </Link>

            <Link
              href="https://github.com/dzimmerman902"
              target="_blank"
              rel="noopener noreferrer"
              mb="3rem">
              github
            </Link>

            <Label>EMAIL</Label>

            <Link mb="3rem">dzimmerman902@gmail.com</Link>

            <Label>TELEPHONE</Label>

            <Link mb="3rem">(407) 405-3519</Link>

            <Label mb="1.4rem">RESUME</Label>

            <ButtonCont>
              <Button
                color="light"
                link="/static/DevinResume.pdf"
                download="DevinResume">
              Download
              </Button>

            </ButtonCont>
          </FindMe>
        </Content>
      </Row>
    </Container>
  </Section>
)

export default Contact
