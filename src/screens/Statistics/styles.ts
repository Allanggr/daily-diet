import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' 
import styled, { css } from 'styled-components/native'

type StatusProp = {
  status: 'SUCCESS' | 'DANGER'
}

export const Container = styled(SafeAreaView)<StatusProp>`
  flex: 1;
  background-color: ${({ theme, status }) => status === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const StatisticsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const PercentageContainer = styled(TouchableOpacity)<StatusProp>`
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

export const OpenStatisticsIcon = styled(ArrowLeft).attrs<StatusProp>(({ theme, status }) => ({
    size: 24,
    color: status === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
    position: absolute;
    left: 20px;
    top: 10px;
`