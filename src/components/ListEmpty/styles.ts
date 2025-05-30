import styled, { css } from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Message = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export { Container, Message }
