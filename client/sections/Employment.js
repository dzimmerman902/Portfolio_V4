import styled from 'styled-components'
import theme from '../themes/portfolio'
import employmentData from '../data/employment'

import Chip from '../components/Chip'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Section from '../components/Section'

const StyledEmployment = styled.section`
  background-color: ${theme.colorGreyLightest};
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
          {employmentData.map(data => <Chip {...data} />)}
        </StyledEmploymentChips>
      </Section>
    </Container>
  </StyledEmployment>
)

export default Employment
