import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text = styled.div`
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

const BackgroundImg = styled.div`
  background-image: ${({ img }) => `url(/static/${img})`};
  background-size: cover;
  background-position: center;
  height: 22rem;
  padding: 1.2rem;
  overflow: hidden;
  transition: all 0.3s;
`

const Card = styled.div`
  border-radius: 1rem;
  box-shadow: 2px 3px 2rem ${({ theme }) => theme.colorBlack};
  overflow: hidden;
  position: relative;

  &:hover {
    ${Text} {
      opacity: 1;
    }

    ${BackgroundImg} {
      filter: blur(3px) brightness(50%);
      transform: scale(1.1);
    }
  }
`

const Name = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 2.3rem;
  font-weight: 700;

  cursor: default;
  margin-bottom: 1rem;
  transition: all 0.5s;
`
const Description = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 1.7rem;
  line-height: 1.15;

  cursor: default;
  margin-bottom: 1rem;
  transition: all 0.5s;
`

const Link = styled.a`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 1.7rem;
  text-decoration: none;

  border-bottom: 1px solid ${({ theme }) => theme.colorWhite};
  cursor: pointer;
  transition: all 0.5s;
`

const Project = ({ description, github, img, name }) => (
  <Card>
    <Text>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Link href={github} target="_blank">See More</Link>
    </Text>
    <BackgroundImg img={img} />
  </Card>
)

Project.propTypes = {
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Project
