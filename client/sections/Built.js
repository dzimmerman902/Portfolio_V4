import styled from 'styled-components'

import Container from '../components/Container'
import Heading from '../components/Heading'
import Section from '../components/Section'

const techs = [
  'react.png',
  'nextjs.svg',
  'styled-components.png',
  'nodejs.png',
  'mongodb.png'
]

const StyBuilt = styled.section`
  background-color: ${({ theme }) => theme.colorSection};
`

const StyBuiltChips = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  margin-top: 7rem;
`

const StyChip = styled.div`
  text-align: center;
`

const StyBuiltImg = styled.img`
  height: 20rem;
`

const Built = () => (
  <StyBuilt>
    <Container>
      <Section>
        <Heading align="center" size={1}>
          Technology Used
        </Heading>

        <StyBuiltChips>
          {techs.map(tech => (
            <StyChip>
              <StyBuiltImg src={`/static/${tech}`} alt={tech} />
            </StyChip>
          ))}
        </StyBuiltChips>
      </Section>
    </Container>
  </StyBuilt>
)

export default Built
