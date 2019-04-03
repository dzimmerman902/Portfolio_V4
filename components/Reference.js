import styled, { css } from 'styled-components'

const Card = styled.div`
  padding: 1rem;
`

const Top = styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr;
  grid-column-gap: 2rem;
  align-items: center;

  margin-bottom: 1rem;

  ${({ theme }) => theme.response('small', css`
    grid-template-columns: 1fr;
    justify-items: center;
  `)}
`

const Img = styled.img`
  height: 12rem;
  width: 12rem;
  overflow: hidden;
  clip-path: circle(50% at 50% 50%);
`

const Contact = styled.div`
  padding: 1rem;

  ${({ theme }) => theme.response('small', css`
    text-align: center;
  `)}
`

const Name = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 2.2rem;
  font-weight: 700;
  text-transform: uppercase;

  margin-bottom: 1rem;
`

const JobTitle = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 1.8rem;
  text-transform: uppercase;
`

const Review = styled.div`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 1.8rem;
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