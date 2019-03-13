import styled from 'styled-components'
import theme from '../themes/portfolio'
import skillsData from '../data/skills'

import Container from '../components/Container'
import Heading from '../components/Heading'
import Section from '../components/Section'

const StyledSkills = styled.div`
  background-image: ${theme.backgroundImage()}, url('/static/comp-1.jpg');
  background-size: cover;
`

const StyledSkillsChips = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-auto-rows: auto;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`

const StyledSkillsChipBody = styled.div`
  background-color: ${props => props.theme.colorWhite};
  border-radius: 0.8rem;
  padding: 2rem;
`

const StyledSkillsChipTitle = styled.div`
  color: ${props => props.theme.colorBlack};
  font-size: 2rem;
  font-weight: 800;

  margin-bottom: 2rem;
`

const StyledSkillsChipList = styled.ul``

const StyledSkillChipItem = styled.li`
  color: white;
  font-size: 1.8rem;
  cursor: pointer;

  display: inline-block;
  padding: 0.8rem;
  background-color: ${props => props.theme.colorPrimary};
  border-radius: 0.8rem;
  transition: all 0.2s;

  &:not(:last-child) {
    margin-bottom: 1.2rem;
    margin-right: 1.4rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow()};
  }
`

const Skills = () => (
  <StyledSkills>
    <Container>
      <Section>
        <Heading align="center" color="white" size={1}>
          Skills and Technologies
        </Heading>

        <StyledSkillsChips>
          {skillsData.map(skill => (
            <StyledSkillsChipBody key={skill.id}>
              <StyledSkillsChipTitle>{skill.title}</StyledSkillsChipTitle>
            
              <StyledSkillsChipList>
                {skill.details.map(deet => (
                  <StyledSkillChipItem key={deet}>{deet}</StyledSkillChipItem>
                ))}
              </StyledSkillsChipList>
            </StyledSkillsChipBody>
          ))}
        </StyledSkillsChips>
      </Section>
    </Container>
  </StyledSkills>
)

export default Skills
