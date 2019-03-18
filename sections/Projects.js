import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import ChipProjects from '../components/ChipProjects'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Section from '../components/Section'

const StyProjects = styled.section`
  background-color: ${({ theme }) => theme.colorSection};
`

const StyProjectsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  margin-top: 7rem;

  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }
`

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('https://devinzimmerman-api.herokuapp.com/v1/projects')
      .then(res => res.json())
      .then(results => {
        setProjects(results)
      })
  }, [])

  return (
    <StyProjects>
      <Container>
        <Section>
          <Heading align="center" size={1}>
            Personal Projects
          </Heading>

          <Paragraph align="center">
            <b>Hover/Click</b> picture for more information
          </Paragraph>

          <StyProjectsContent>
            {projects
              .sort((a, b) => a.order - b.order)
              .map(item => <ChipProjects key={item._id} {...item} />) || null}
          </StyProjectsContent>
        </Section>
      </Container>
    </StyProjects>
  )
}

export default Projects
