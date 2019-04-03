import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import ChipProjects from '../components/Project'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Row from '../components/Row'

const Section = styled.section`
  background-color: ${({ theme }) => theme.colorSection};
`

const Content = styled.div`
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
    <Section id="projects">
      <Container>
        <Row>
          <Heading align="center" size={1}>
            Personal Projects
          </Heading>

          <Paragraph align="center" mb="3rem">
            <b>Hover/Click</b> picture for more information
          </Paragraph>

          <Content>
            {projects
              .sort((a, b) => a.order - b.order)
              .map(item => <ChipProjects key={item._id} {...item} />) || null}
          </Content>
        </Row>
      </Container>
    </Section>
  )
}

export default Projects
