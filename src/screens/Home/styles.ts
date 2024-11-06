import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' 
import styled, { css } from 'styled-components/native'
import { Text } from 'react-native'
import ArrowUpRight from "phosphor-react-native/src/icons/ArrowUpRight";


export type StatusProp = {
  status: 'SUCCESS' | 'DANGER'
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 15px 25px 0 25px;
  background-color: ${({ theme }) => theme.COLORS.WHITE }
`

export const MealsContainer = styled.View`
  flex: 1;
  margin-top: 30px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  margin-bottom: 10px;
`

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-top: 20px;
`
export const Meal = styled(TouchableOpacity)`
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const MealName = styled(Text).attrs({
  numberOfLines: 1
})`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  width: 60%;
`

export const MealHour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  padding-right: 10px;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const MealStatus = styled.View<StatusProp>`
  background-color: ${({ theme, status }) => status === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  width: 14px;
  height: 14px;
  border-radius: 50px;
  margin-left: 45px;
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

export const OpenStatisticsIcon = styled(ArrowUpRight).attrs<StatusProp>(({ theme, status }) => ({
    size: 24,
    color: status === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
    position: absolute;
    right: 10px;
    top: 10px;
`

export const EmptyListComponent = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_3};
  `};

  margin-top: 20px;
  text-align: center;
  font-style: italic;
`;