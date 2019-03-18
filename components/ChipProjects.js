import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyChipProjectsText = styled.div`
  position: absolute;
  padding: 1.2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  opacity: 0;
  z-index: 10;
  transition: all 0.3s;
`

const StyChipProjectsBgi = styled.div`
  background-image: ${({ img }) => `url(/static/${img})`};
  background-size: cover;
  background-position: center;
  height: 22rem;
  padding: 1.2rem;
  overflow: hidden;
  transition: all 0.3s;
`

const StyChipProjects = styled.div`
  border-radius: 1rem;
  box-shadow: 2px 3px 2rem ${({ theme }) => theme.colorBlack};
  overflow: hidden;
  position: relative;

  &:hover {
    ${StyChipProjectsText} {
      opacity: 1;
    }

    ${StyChipProjectsBgi} {
      filter: blur(3px) brightness(60%);
      transform: scale(1.1);
    }
  }
`

const StyChipProjectsName = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 2.6rem;

  cursor: default;
  margin-bottom: 1rem;
  transition: all 0.5s;
`
const StyChipProjectsDescription = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 1.6rem;

  cursor: default;
  margin-bottom: 1rem;
  transition: all 0.5s;
`

const StyChipProjectsLink = styled.a`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 1.6rem;
  text-decoration: none;

  border-bottom: 1px solid ${({ theme }) => theme.colorWhite};
  cursor: pointer;
  transition: all 0.5s;
`

const ChipProjects = ({ description, github, img, name }) => (
  <StyChipProjects>
    <StyChipProjectsText>
      <StyChipProjectsName>{name}</StyChipProjectsName>
      <StyChipProjectsDescription>{description}</StyChipProjectsDescription>
      <StyChipProjectsLink href={github}>See More</StyChipProjectsLink>
    </StyChipProjectsText>
    <StyChipProjectsBgi img={img} />
  </StyChipProjects>
)

export default ChipProjects
