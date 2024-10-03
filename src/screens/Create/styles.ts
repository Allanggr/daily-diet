import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'
import { SafeAreaView } from 'react-native-safe-area-context' 
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5 };
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
  left: 30px;
  top: 60px;
`

export const BackToHomeIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_1
}))``