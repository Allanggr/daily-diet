import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'
import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'

type StatsProp = {
  inDiet: boolean
}

type MealStatusProp = {
  status: 'SUCCESS' | 'DANGER'
}

export const Container = styled(SafeAreaView)<StatsProp>`
  flex: 1;
  background-color: ${({ theme, inDiet }) => inDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
  padding: 20px 0 0;
`

export const MainTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
  margin-bottom: 30px;
`

export const CreatingContainer = styled.View`
  flex: 1;
  padding: 40px 30px;
  background-color: ${({ theme }) => theme.COLORS.WHITE };
  border-radius: 20px;
  gap: 10px;
`

export const BackToHomeButton = styled.TouchableOpacity`
  position: absolute;
  left: -1px;
  top: 30px;
  padding: 30px;
`

export const BackToHomeIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_1
}))``

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 10px;
`

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_3};  
  `}
`

export const LabelDate = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-top: 30px;
`
export const MealDate = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_3};  
  `}
`

export const MealStatsContainer = styled.View`
  padding: 40px 30px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5 };
  border-radius: 20px;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  border-radius: 50px;
  max-width: 150px;
  max-height: 50px;
  padding: 10px 20px;
`

export const MealStatsTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`
export const MealStatus = styled.View<MealStatusProp>`
  background-color: ${({ theme, status }) => status === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  width: 8px;
  height: 8px;
  border-radius: 50px;
  padding: 0;
`

export const ButtonsContainer = styled.View`
  position: relative;
  bottom: -280px;
  gap: 10px;
  justify-content: center;
`

export const ModalTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
  margin-bottom: 30px;
`