import styled from 'styled-components'
import data from '../data'

import Chip from '../components/Chip'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Section from '../components/Section'

const StyledEmployment = styled.section`
  background-color: ${props => props.theme.colorGreyLightest};
`

const StyledEmploymentChips = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;

  margin-top: 7rem;

  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }
`

const Employment = () => (
  <StyledEmployment>
    <Container>
      <Section>
        <Heading align="center" color="black" size={1}>
          Employment History
        </Heading>

        <Paragraph align="center">
          A Web Developer with Client-Centric Sensibilities.
        </Paragraph>

        <Paragraph align="center">
          <b>Click Image</b> for More Details
        </Paragraph>

        <StyledEmploymentChips>
          {data.employment.map(item => (
            <Chip key={item.id} {...item} />
          ))}
        </StyledEmploymentChips>
      </Section>
    </Container>
  </StyledEmployment>
)

export default Employment
