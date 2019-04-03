import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../themes/portfolio'

const HEADING_COLOR = {
  black: theme.colorBlack,
  white: theme.colorWhite
}

const StyledHeading1 = styled.h1`
  color: ${props => HEADING_COLOR[props.color] || props.theme.colorBlack};
  font-family: ${props => props.theme.fontFamilyPrimary};
  font-size: 4.5rem;
  font-weight: 700;
  text-align: ${props => props.align || 'left'};

  margin-bottom: ${({ mb }) => mb || '2rem'};
`

const StyledHeading3 = styled.h3`
  color: ${props => HEADING_COLOR[props.color] || props.theme.colorBlack};
  font-family: ${props => props.theme.fontFamilyPrimary};
  font-size: 1.7rem;
  letter-spacing: 2px;
  line-height: 1.15;
  text-align: ${props => props.align || 'left'};
  text-transform: uppercase;

  margin-bottom: ${({ mb }) => mb || '1.2rem'};
`

const HeadingObj = {
  1: props => <StyledHeading1 {...props} />,
  3: props => <StyledHeading3 {...props} />
}

const Heading = props => {
  const { size } = props

  return HeadingObj[size](props)
}

Heading.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired
}

export default Heading
