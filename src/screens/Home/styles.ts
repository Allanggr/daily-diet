import { SafeAreaView } from 'react-native-safe-area-context' 
import styled, { css } from 'styled-components/native'



export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 25px 25px 0 25px;
  background-color: ${({ theme }) => theme.COLORS.WHITE }
`

export const MealsContainer = styled.View`
  flex: 1;
  margin-top: 40px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  margin-bottom: 10px;
`
