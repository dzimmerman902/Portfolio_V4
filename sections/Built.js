import styled from 'styled-components'

import Container from '../components/Container'
import Heading from '../components/Heading'
import Row from '../components/Row'

const techs = [
  'react.png',
  'nextjs.svg',
  'styled-components.png',
  'nodejs.png',
  'mongodb.png'
]

const Section = styled.section`
  background-color: ${({ theme }) => theme.colorSection};
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  justify-items: center;
  
  margin-top: 7rem;
`

const Img = styled.img`
  height: 20rem;
`

const Built = () => (
  <Section>
    <Container>
      <Row>
        <Heading align="center" size={1}>
          Technology Used
        </Heading>

        <Content>
          {techs.map(tech => (
            <Img src={`/static/${tech}`} key={tech} alt={tech} />
          ))}
        </Content>
      </Row>
    </Container>
  </Section>
)

export default Built
