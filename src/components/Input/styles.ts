import styled, { css } from "styled-components/native";

export const StyledInput = styled.TextInput`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 20px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  margin-bottom: 5px;
`