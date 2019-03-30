import styled from 'styled-components'

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
`

const Label = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.4rem;

  margin-bottom: 0.8rem;
`

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colorWhite};
  font-size: 2.4rem;
  font-weight: 600;
  display: block;
  margin-bottom: 0.8rem;
`

const FindMe = styled.div``

const Contact = () => (
  <Section id="contact">
    <Container>
      <Row>
        <Content>
          <Form>
            <Heading align="center" size={1}>
              Get Connected
            </Heading>
            <Input label="Name" />
            <Input label="Email" />
            <Input label="Phone Number" />
            <TextArea label="Message" />
            <Button color="primary">
              <i>Comming Soon</i>
            </Button>
          </Form>
          <FindMe>
            <Label>
              FIND ME ON THE WEB
            </Label>
            <Link
              href="https://linkedin.com/in/devin-zimmerman"
              target="_blank"
              rel="noopener noreferrer">
              linkedin
            </Link>
            <Link
              href="https://github.com/dzimmerman902"
              target="_blank"
              rel="noopener noreferrer">
              github
            </Link>
            <Label>
              EMAIL
            </Label>
            <Link color="white" size={3}>
              dzimmerman902@gmail.com
            </Link>
          </FindMe>
        </Content>
      </Row>
    </Container>
  </Section>
)

export default Contact
