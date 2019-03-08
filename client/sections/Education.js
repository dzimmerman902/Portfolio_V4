import styled from 'styled-components'
import data from '../data'

import Chip from '../components/Chip'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Section from '../components/Section'

const StyledEducation = styled.section`
  background-color: ${props => props.theme.colorGreyLightest};
`

const StyledEductionChips = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;

  margin-top: 7rem;

  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }
`

const Education = () => (
  <StyledEducation>
    <Container>
      <Section>
        <Heading align="center" size={1}>
          Education & Courses
        </Heading>

        <StyledEductionChips>
          {data.education.map(item => (
            <Chip key={item.id} {...item} />
          ))}
        </StyledEductionChips>
      </Section>
    </Container>
  </StyledEducation>
)

export default Education
