import { SafeAreaView } from 'react-native-safe-area-context' 
import styled, { css } from 'styled-components/native'

type TextProps = {
    status: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE };
  justify-content: center;
  align-items: center;
`
export const Title = styled.Text<TextProps>`
    ${({ theme, status }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${status ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `}
    margin-bottom: 10px;
    text-align: center;
`
export const Description = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_2};
    `}
    text-align: center;
`

export const Image = styled.Image`
    margin: 40px 0;
`