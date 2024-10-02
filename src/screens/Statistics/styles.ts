import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'
import { TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' 
import styled, { css } from 'styled-components/native'

type StatusProp = {
  status: 'SUCCESS' | 'DANGER'
}

type StatisticsSquareProps = {
    background: 'SUCCESS' | 'DANGER' | 'NEUTRAL'
}

export const Container = styled(SafeAreaView)<StatusProp>`
  flex: 1;
  background-color: ${({ theme, status }) => status === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const StatisticsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  padding: 40px 20px 25px 20px;
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

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_1};
    `}
    text-align: center;
    margin-bottom: 20px;
`

export const StatisticsSquare = styled(View)<StatisticsSquareProps>`
    border-radius: 8px;
    background-color: ${({ theme, background }) => {
        if(background === 'SUCCESS') return theme.COLORS.GREEN_LIGHT
        if(background === 'DANGER') return theme.COLORS.RED_LIGHT
        return theme.COLORS.GRAY_6
    }};
    padding: 20px;
    gap: 10px;
    flex-shrink: 1;
`

export const StatistisSquareTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLORS.GRAY_1};
    `}
    text-align: center;
`

export const StatisticsSquareDescription = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_2};
    `}
    text-align: center;
`