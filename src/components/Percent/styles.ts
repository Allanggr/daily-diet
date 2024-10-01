import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import ArrowUpRight from "phosphor-react-native/src/icons/ArrowUpRight";

type Props = {
    status: 'SUCCESS' | 'DANGER'
}

export const Container = styled(TouchableOpacity)<Props>`
    margin-top: 20px;
    padding: 20px 16px 25px 16px;
    border-radius: 8px;
    background-color: ${({ theme, status }) => status === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Percentage = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXL}px;
        color: ${theme.COLORS.GRAY_1};
    `}
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

export const OpenStatisticsIcon = styled(ArrowUpRight).attrs<Props>(({ theme, status }) => ({
    size: 24,
    color: status === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
    position: absolute;
    right: 10px;
    top: 10px;
`