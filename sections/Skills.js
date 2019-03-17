import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import theme from '../themes/portfolio'

import ChipSkills from '../components/ChipSkills'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Section from '../components/Section'

const StySkills = styled.div`
  background-image: ${theme.backgroundImage()}, url('/static/comp-1.jpg');
  background-size: cover;
`

const StySkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-auto-rows: auto;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`

const StySkillsCard = styled.div`
  background-color: ${props => props.theme.colorWhite};
  border-radius: 0.8rem;
  padding: 2rem;
`

const StySkillsCardTitle = styled.div`
  color: ${props => props.theme.colorBlack};
  font-size: 2rem;
  font-weight: 800;

  margin-bottom: 2rem;
`

const Skills = () => {
  const [programming, setProgramming] = useState([])
  const [soft, setSoft] = useState([])
  const [technical, setTechnical] = useState([])

  useEffect(() => {
    fetch('https://devinzimmerman-api.herokuapp.com/v1/programming')
      .then(res => res.json())
      .then(results => {
        setProgramming(results)
      })

    fetch('https://devinzimmerman-api.herokuapp.com/v1/soft')
      .then(res => res.json())
      .then(results => {
        setSoft(results)
      })

    fetch('https://devinzimmerman-api.herokuapp.com/v1/technical')
      .then(res => res.json())
      .then(results => {
        setTechnical(results)
      })
  }, [])

  return (
    <StySkills>
      <Container>
        <Section>
          <Heading align="center" color="white" size={1}>
            Skills and Technologies
          </Heading>

          <StySkillsContent>
            <StySkillsCard>
              <StySkillsCardTitle>
                Programming Languages / Libraries
              </StySkillsCardTitle>
              {programming
                .sort((a, b) => a.order - b.order)
                .map(item => <ChipSkills key={item._id} {...item} />) || null}
            </StySkillsCard>

            <StySkillsCard>
              <StySkillsCardTitle>
                Technical Skills / Software
              </StySkillsCardTitle>
              {soft
                .sort((a, b) => a.order - b.order)
                .map(item => <ChipSkills key={item._id} {...item} />) || null}
            </StySkillsCard>
            
            <StySkillsCard>
              <StySkillsCardTitle>Soft Skills</StySkillsCardTitle>
              {technical
                .sort((a, b) => a.order - b.order)
                .map(item => <ChipSkills key={item._id} {...item} />) || null}
            </StySkillsCard>
          </StySkillsContent>
        </Section>
      </Container>
    </StySkills>
  )
}

export default Skills
