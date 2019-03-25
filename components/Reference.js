import styled from 'styled-components'

const Card = styled.div`
  padding: 1rem;
`

const Top = styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr;
  grid-column-gap: 2rem;
  align-items: center;

  margin-bottom: 1rem;
`

const Img = styled.img`
  height: 12rem;
  width: 12rem;
  overflow: hidden;
  clip-path: circle(50% at 50% 50%);
`

const Contact = styled.div`
  padding: 1rem;
`

const Name = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 2.0rem;
  font-weight: 700;
  text-transform: uppercase;

  margin-bottom: 1rem;
`

const JobTitle = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 1.6rem;
  text-transform: uppercase;
`

const Review = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 1.6rem;
  line-height: 1.3;

  padding: 1rem;
`

const Reference = ({ linkedin_img, name, job_title, review }) => (
  <Card>
    <Top>
      <Img src={linkedin_img} />
      <Contact>
        <Name>{name}</Name>
        <JobTitle>{job_title}</JobTitle>
      </Contact>
    </Top>
    <Review>{review}</Review>
  </Card>
)

export default Reference