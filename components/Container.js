import styled, { css } from 'styled-components'

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1140px;

  ${({ theme }) =>
    theme.response(
      'large',
      css`
        max-width: 960px;
      `
    )}
  };

  ${({ theme }) =>
    theme.response(
      'medium',
      css`
        max-width: 720px;
      `
    )}
  };

  ${({ theme }) =>
    theme.response(
      'small',
      css`
        max-width: 540px;
      `
    )}
  };

  ${({ theme }) =>
    theme.response(
      'x-small',
      css`
        max-width: 400px;
      `
    )}

  ${({ theme }) =>
    theme.response(
      'xx-small',
      css`
        max-width: 350px;
      `
    )}
`

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

export default Container
